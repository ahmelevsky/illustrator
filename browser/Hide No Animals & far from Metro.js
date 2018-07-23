// ==UserScript==
// @name         Hide No Animals & far from Metro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://pin7.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

 var xpath = "//table[contains(@class, 'tbm')]/tbody/tr[descendant::td[contains(@class, 'tdm')]//text()[contains(.,'Без/Жив')] or descendant::td[contains(@class, 'tdm')]//text()[contains(.,'м.тр.')] or descendant::td[contains(@class, 'tdm')]//text()[boolean(number(substring-before(substring-after(., '1/'), ' эт')))]]";
makeInvisible(xpath);

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getElementsByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.ANY_TYPE, null);
}

function makeInvisible(path){
 var elemen  = getElementByXpath(path);
 while (elemen) {
  elemen.parentNode.removeChild(elemen);
  elemen  = getElementByXpath(path);
}
}
}
)();