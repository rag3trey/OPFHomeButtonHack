// ==UserScript==
// @name         Home Button Hack
// @version      0.1
// @description  Redirect OnePlus Forums to Recents instead of Recommended
// @author       Baymax
// @include        *forums.oneplus.com*
// @exclude        *forums.oneplus.com
// @grant        none
// ==/UserScript==

$("a:contains('Home')").attr('href', '?order=Recent');
