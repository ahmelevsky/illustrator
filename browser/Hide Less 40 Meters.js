// ==UserScript==
// @name         Hide Less 40 Meters
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://pin7.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
 hideFlatsLessThan(40);

})();

function hideFlatsLessThan(meters) {
	var rows = getElementsByXPathArr("//table[contains(@class, 'tbm')]/tbody/tr/td[@class='tdm_04']/..");
    for (i=0;i<rows.length;i++){
	var size = document.evaluate("./td[@class='tdm_04']/strong/text()", rows[i], null, XPathResult.STRING_TYPE, null);
	var s;
	s =	parseInt(size.stringValue);
	if (s && s<meters)
	rows[i].remove();
	}
}
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