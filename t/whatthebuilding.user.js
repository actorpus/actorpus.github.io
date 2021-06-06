// ==UserScript==
// @name         What the building
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  replaces all instances of 'fuck' with 'building'
// @author       actorpus
// @match        *://*/*
// @grant        none
// ==/UserScript==

function replaceTextOnPage(from, to){
  getAllTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length)
        for(var i = 0; i < node.childNodes.length; i++)
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE)
        result.push(node);
    })(document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

function run(){
    replaceTextOnPage('fuck', 'building');
    replaceTextOnPage('Fuck', 'Building');
    replaceTextOnPage('FUCK', 'BUILDING');
}

setInterval(run, 1000);