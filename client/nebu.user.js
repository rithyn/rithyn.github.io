// ==UserScript==
// @name         Beta-Nebula
// @version      3.1
// @description  mmmh
// @author       𝒩𝑒́𝒷𝓊𝓁𝑒𝓊𝓈𝑒#0752
// @license      MIT
// @icon         https://raw.githubusercontent.com/LCN8888/Nebu-Client/main/Beta%20Nebula/icone%20de%20Beta-Nebula.png
// @match        https://starblast.io/
// @run-at       document-end
// @grant        none
// ==/UserScript==

console.clear();
document.open();
document.write('<html><head><meta charset="UTF-8"><title>Beta-Nebula</title><style>body{background:#000}body,div,html{margin:0;padding:0;color:#fff;font-family:Tahoma,Verdana}div{font-size:2em}span{margin:50px}#content{overflow:hidden;position:absolute;left:0;right:0;bottom:0;top:0;opacity:0;transition:all 3s;z-index:0}#logo{overflow:hidden;text-align:center;position:fixed;left:0;right:0;bottom:0;top:0;opacity:1;transition:all 3s;z-index:2}#logo img{transition:opacity 1s;opacity:0;width:50%}#neuronality{position:fixed;bottom:8vh;left:0;right:0;text-align:center;transition:all 3s;z-index:1;color:#fcd600;font-size:4em}iframe{border:none}</style></head><body><div id="logo"><img src="https://raw.githubusercontent.com/NebuleuseTheGreat/LCN8888/main/test2.png"></div><div id="neuronality">Please Wait ...</div><script>var logo=document.querySelector("#logo img");logo.onload=function(){logo.style.marginTop=(.8*window.innerHeight-logo.offsetHeight)/2+"px",logo.style.opacity="1"}</script><div id="content"></body></html>');
document.close();
function Alpha_Nebula_is_ready() {
  if (window.location.pathname != '/') {
    return;
  }
  var _0x5d97c7 = new XMLHttpRequest();
  _0x5d97c7.open("GET", "https://raw.githubusercontent.com/immagangster2/immagangster2.github.io/main/clienthtml/ClientSB.html");
  _0x5d97c7.onreadystatechange = function () {
    if (_0x5d97c7.readyState === 4) {
      var _0x3c0be4 = _0x5d97c7.responseText;
      if (_0x3c0be4 != undefined) {} else {
        alert('');
      }
      if (!window.mara) {} else {
        let _0x16dd58 = false;
        for (const _0x19fd54 of window.mara) {
          try {
            if (typeof _0x19fd54 === "function") {
              _0x3c0be4 = _0x19fd54(_0x3c0be4);
            } else {}
          } catch (_0x2253f9) {
            if (!_0x16dd58) {
              _0x16dd58 = true;
            }
          }
        }
      }
      document.open();
      document.write(_0x3c0be4);
      document.close();
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
          if (!window.araa) {} else {
            for (const _0x35ccf6 of window.araa) {
              try {
                if (typeof _0x35ccf6 === "function") {
                  _0x35ccf6();
                } else {}
              } catch (_0xd00b2b) {}
            }
          }
          ;
        }, 30);
      });
      console.clear();
    }
  };
  _0x5d97c7.send();
}
setTimeout(Alpha_Nebula_is_ready, 3000);
