// ==UserScript==
// @name         OP Forums Home Button Hack
// @version      0.1
// @description  Home goes to Recent instead of Recommended.
// @author       Baymax
// @include        *forums.oneplus.com*
// @exclude        *forums.oneplus.com
// @grant        none
// ==/UserScript==

$("a:contains('Home')").attr('href', '?order=Recent');
