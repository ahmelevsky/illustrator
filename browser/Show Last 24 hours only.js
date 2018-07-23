// ==UserScript==
// @name         Show Last 24 hours only
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://pin7.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
 
hideOlderThan(24);
})();

function getElementsByXPathArr(xpath, parent)
{
  let results = [];
  let query = document.evaluate(xpath,
      parent || document,
      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  for (let i=0, length=query.snapshotLength; i<length; ++i) {
    results.push(query.snapshotItem(i));
  }
  return results;
}

function hideOlderThan(hours) {
	var rows = getElementsByXPathArr("//table[contains(@class, 'tbm')]/tbody/tr/td[@class='tdm_04']/..");
    for (i=0;i<rows.length;i++){
	var time = document.evaluate("./td[@class='tdm_01']/font[@color='#999999']/text()[1]", rows[i], null, XPathResult.STRING_TYPE, null).stringValue;
    var date = document.evaluate("./td[@class='tdm_01']/font[@color='#999999']/text()[2]", rows[i], null, XPathResult.STRING_TYPE, null).stringValue;
	var startDate = new Date();
	var d = date.split('.');
	var ddate = '20'.concat(d[2],'-',d[1],'-',d[0],'T',time);
    var thisDate = new Date(ddate);
	startDate.setHours(startDate.getHours() - hours);
	if (thisDate.getTime() < startDate.getTime())
	rows[i].remove();
	}
}