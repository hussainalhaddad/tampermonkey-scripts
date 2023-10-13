// ==UserScript==
// @name         a2zapk big buttons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://a2zapk.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=a2zapk.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var img1 = document.createElement("img");
img1.height = 150;
img1.width = 150;
img1.src = "https://cdn-icons-png.flaticon.com/512/189/189253.png";

var img2 = document.createElement("img");
img2.height = 150;
img2.width = 150;
img2.src = "https://cdn-icons-png.flaticon.com/512/189/189254.png";

var next = document.getElementsByClassName("PagesPar")[0].children[0].lastElementChild.lastChild
next.appendChild(img1);
var prev = document.getElementsByClassName("PagesPar")[0].children[0].firstChild.firstChild
prev.appendChild(img2);
})();
