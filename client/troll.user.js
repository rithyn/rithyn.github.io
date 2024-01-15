// ==UserScript==
// @name         Troll Client
// @version      0.1
// @description  Troll Client
// @author        Thanks 👍
// @license      GPL-3.0
// @match        https://starblast.io/
// @run-at       document-end
// @grant        none
// ==/UserScript==

const log = (msg) => console.log(`%c[Client Loader] ${msg}`, "color: #06c26d");

console.clear()

document.open();
document.write(`<html><head><title>Loading...</title></head><body style="background-color:#293449;"><div style="margin: auto; width: 50%;"><h1 style="text-align: center;padding: 170px 0;">Loading Client</h1><h1 style="text-align: center;">Please wait</h1></div></body></html>`);
document.close();
log(`Started`)
function TrollLoader(){


    var url = "https://raw.githubusercontent.com/immagangster2/immagangster2.github.io/main/clienthtml/trollclient.html";

    var xhr = new XMLHttpRequest();
    log("Loading Client");
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var starSRC = xhr.responseText;
            if(starSRC != undefined){
            }
            document.open();
            document.write(starSRC);
            document.close();
            document.addEventListener("DOMContentLoaded", function() {
                log("Client loaded");
            });
        }};
    xhr.send();
}
setTimeout(TrollLoader, 1);
