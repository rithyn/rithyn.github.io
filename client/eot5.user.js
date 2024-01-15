// ==UserScript==
// @name         EOT Client
// @version      0.1
// @description  EOT Client
// @author        Thanks 👍
// @license      GPL-3.0
// @match        https://starblast.io/
// @run-at       document-end
// @grant        none
// ==/UserScript==

const log = (msg) => console.log(`%c[Mod injector] ${msg}`, "color: #06c26d");

console.clear()
document.open();
document.write(`<html><head><meta charset="UTF-8"><title>Rithy Client</title><style>body{background:#000}body,div,html{margin:0;padding:0;color:#fff;font-family:Tahoma,Verdana}div{font-size:2em}span{margin:50px}#content{overflow:hidden;position:absolute;left:0;right:0;bottom:0;top:0;opacity:0;transition:all 3s;z-index:0}#logo{overflow:hidden;text-align:center;position:fixed;left:0;right:0;bottom:0;top:0;opacity:1;transition:all 3s;z-index:2}#logo img{transition:opacity 1s;opacity:0;width:50%}#neuronality{position:fixed;bottom:8vh;left:0;right:0;text-align:center;transition:all 3s;z-index:1;color:#ffffff;font-size:4em}iframe{border:none}</style></head><body><div id="logo"><img src="https://raw.githubusercontent.com/b20ea132f276271c/8741271788b42630/main/8741271788b42630/logo-principal.png"></div><div id="neuronality">Please Wait ...</div><script>var logo=document.querySelector("#logo img");logo.onload=function(){logo.style.marginTop=(.8*window.innerHeight-logo.offsetHeight)/2+"px",logo.style.opacity="1"}</script><div id="content"></body></html>`);
document.close();
log(`Started`)

function injectLoader() {
    if (window.location.pathname != "/") {
        log(`Injection not needed`);
        return
    }
    var url = "https://raw.githubusercontent.com/immagangster2/immagangster2.github.io/main/clienthtml/eotnofunc.html";
    var xhr = new XMLHttpRequest();
    log("Fetching starblast src...");
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var starSRC = xhr.responseText;
            if (starSRC != undefined) {
                log(`Src fetched successfully`)
            }

            const start_time = performance.now();
            log("Patching src...");
            //functions stuff
            const clientlink = localStorage.getItem("clientlink");
            if (clientlink !== null) {
                let clientscript = document.createElement("script");
                clientscript.src = clientlink;
                document.body.appendChild(clientscript);
            }
            const end_time = performance.now();
            log(`Patched src successfully (${(end_time - start_time).toFixed(0)}ms)`);
            document.open();
            document.write(starSRC);
            document.close();
            setTimeout(() => {
                log("Document loaded");
                //style stuff
                var socialDie1 = document.querySelector(".social");

                if (socialDie1) {
                    var loveIcon = document.createElement("i");
                    loveIcon.className = "sbg sbg-menu";
                    socialDie1.appendChild(loveIcon);
                    var settingstab = null;

                    loveIcon.addEventListener("mousedown", function(event) {
                        if (!settingstab) {
                            //settings tab
                            console.log("Settings opened");
                            settingstab = document.createElement("div");
                            settingstab.id = "settings-manager";
                            settingstab.style.width = "500px";
                            settingstab.style.background = "hsla(200, 0%, 50%, 0.3)";
                            settingstab.style.borderRadius = "20px";
                            settingstab.style.padding = "40px";
                            settingstab.style.boxShadow = "0 0 10px rgba(0,0,0,.3)";
                            settingstab.style.position = "fixed";
                            settingstab.style.left = "50%";
                            settingstab.style.top = "50%";
                            settingstab.style.transform = "translate(-50%, -50%)";
                            settingstab.style.backdropFilter = "blur(5px)";
                            settingstab.style.webkitBackdropFilter = "blur(5px)";
                            settingstab.style.zIndex = "9999";
                            settingstab.style.display = "none";
                            let offsetX,
                                offsetY,
                                isDragging = false;
                            settingstab.addEventListener("mousedown", (e) => {
                                const target = e.target;

                                if (
                                    target.tagName !== "INPUT" &&
                                    target.tagName !== "BUTTON" &&
                                    target.type !== "color" &&
                                    target.type !== "range" &&
                                    target.type !== "checkbox"
                                ) {
                                    isDragging = true;
                                    offsetX =
                                        e.clientX -
                                        (settingstab.getBoundingClientRect().left +
                                            settingstab.offsetWidth / 2);
                                    offsetY =
                                        e.clientY -
                                        (settingstab.getBoundingClientRect().top +
                                            settingstab.offsetHeight / 2);
                                }
                            });

                            document.addEventListener("mousemove", (e) => {
                                if (!isDragging) return;

                                const x = e.clientX - offsetX;
                                const y = e.clientY - offsetY;

                                settingstab.style.left = `${x}px`;
                                settingstab.style.top = `${y}px`;
                            });

                            document.addEventListener("mouseup", () => {
                                isDragging = false;
                            });
                            //close button
                            var closeButtonTopRight1 = document.createElement("button");
                            closeButtonTopRight1.textContent = "X";
                            closeButtonTopRight1.style.position = "absolute";
                            closeButtonTopRight1.style.top = "10px";
                            closeButtonTopRight1.style.right = "10px";
                            closeButtonTopRight1.style.userSelect = "none";
                            closeButtonTopRight1.addEventListener("click", function(event) {
                                event.stopPropagation();
                                settingstab.remove();
                                settingstab = null;
                            });
                            settingstab.appendChild(closeButtonTopRight1);
                            //header
                            var header = document.createElement("h2");
                            header.innerText = "Client Settings";
                            header.style.userSelect = "none";
                            header.style.pointerEvents = "none";
                            settingstab.appendChild(header);
                            //select menu
                            var optionDiv = document.createElement("div");
                            optionDiv.className = "option";
                            var br1 = document.createElement("br");
                            br1.style.userSelect = "none";
                            br1.style.pointerEvents = "none";
                            // Create a select element
                            var clientSelect = document.createElement("select");
                            clientSelect.id = "clientselect";

                            // Create options for the select element
                            var defaultOption = document.createElement("option");
                            defaultOption.style.fontSize = ".8em";
                            defaultOption.value = "en";
                            defaultOption.selected = true;
                            defaultOption.appendChild(document.createTextNode("Choose Option"));
                            clientSelect.add(defaultOption);

                            var option1 = document.createElement("option");
                            option1.style.fontSize = ".8em";
                            option1.value = "da";
                            option1.appendChild(document.createTextNode("EOT Client"));
                            clientSelect.add(option1);

                            var option2 = document.createElement("option");
                            option2.style.fontSize = ".8em";
                            option2.value = "de";
                            option2.appendChild(document.createTextNode("Beta Nebula"));
                            clientSelect.add(option2);

                            var option3 = document.createElement("option");
                            option3.style.fontSize = ".8em";
                            option3.value = "du";
                            option3.appendChild(document.createTextNode("Troll Client"));
                            clientSelect.add(option3);
                            //apply button
                            var applythng = document.createElement("button");
                            applythng.id = "applyChangesBtn";
                            applythng.innerHTML = "Apply Changes";
                            applythng.style.padding = "6px 10px";
                            applythng.style.fontSize = ".95vw";
                            applythng.style.cursor = "pointer";
                            applythng.style.margin = "5px 0 0 0";
                            applythng.style.textAlign = "center";
                            applythng.style.background = "radial-gradient(ellipse at center, hsla(200,0%,0%,1) 0, hsla(200,100%,70%,.5) 150%)";
                            applythng.style.boxShadow = "0 0 6px hsla(200,100%,80%,1)";
                            applythng.style.textShadow = "0 0 7px hsla(200,100%,80%,1)";
                            applythng.style.color = "hsla(0,0%,90%,.8)";
                            applythng.style.fontFamily = "Play, Verdana";
                            applythng.style.border = "0";
                            applythng.style.borderRadius = "35px";

                            //apply things to the Settings Menu
                            settingstab.appendChild(clientSelect);
                            settingstab.appendChild(br1.cloneNode());
                            settingstab.appendChild(applythng);
                            //apply Settings Menu to game
                            document.body.appendChild(settingstab);
                            settingstab.style.display = "block";
                        }
                        var applyChangesBtn = document.getElementById("applyChangesBtn");
                        if (applyChangesBtn) {
                            applyChangesBtn.addEventListener("click", function() {
                                location.reload();
                            });

                        }
var clientselect = document.getElementById("clientselect")
                        if (clientselect) {
                            clientselect.addEventListener('change', function() {
                                var selectedValue = this.value;
                                var clientLink;

                                switch (selectedValue) {
                                    case 'da':
                                        clientLink = 'https://cdn.jsdelivr.net/gh/rithyn/rithyn.github.io@latest/client/eot5.user.js';
                                        break;
                                    case 'de':
                                        clientLink = 'https://cdn.jsdelivr.net/gh/rithyn/rithyn.github.io@latest/client/nebu5.user.js';
                                        break;
                                    case 'du':
                                        clientLink = 'https://cdn.jsdelivr.net/gh/rithyn/rithyn.github.io@latest/client/troll5.user.js';
                                        break;
                                    default:
                                        localStorage.removeItem('clientlink');
                                        break;
                                }
                                localStorage.setItem('clientlink', clientLink);
                            });
                        }
                    });
                }
            }, 30);


        }
    };
    xhr.send();
}
setTimeout(injectLoader, 3000);
