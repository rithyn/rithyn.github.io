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

const log = (msg) => console.log(`%c[Mod injector] ${msg}`, "color: #06c26d");

console.clear()
document.open();
document.write(`<html><head><meta charset="UTF-8"><title>Beta-Nebula</title><style>body{background:#000}body,div,html{margin:0;padding:0;color:#fff;font-family:Tahoma,Verdana}div{font-size:2em}span{margin:50px}#content{overflow:hidden;position:absolute;left:0;right:0;bottom:0;top:0;opacity:0;transition:all 3s;z-index:0}#logo{overflow:hidden;text-align:center;position:fixed;left:0;right:0;bottom:0;top:0;opacity:1;transition:all 3s;z-index:2}#logo img{transition:opacity 1s;opacity:0;width:50%}#neuronality{position:fixed;bottom:8vh;left:0;right:0;text-align:center;transition:all 3s;z-index:1;color:#fcd600;font-size:4em}iframe{border:none}</style></head><body><div id="logo"><img src="https://raw.githubusercontent.com/NebuleuseTheGreat/LCN8888/main/test2.png"></div><div id="neuronality">Please Wait ...</div><script>var logo=document.querySelector("#logo img");logo.onload=function(){logo.style.marginTop=(.8*window.innerHeight-logo.offsetHeight)/2+"px",logo.style.opacity="1"}</script><div id="content"></body></html>`);
document.close();
log(`Started`)

function injectLoader() {
    if (window.location.pathname != "/") {
        log(`Injection not needed`);
        return
    }
    var url = "https://raw.githubusercontent.com/rithyn/rithy-archive/main/Fiches_Nebuleuse/ClientSB.html";
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

                    loveIcon.addEventListener("mousedown", function (event) {
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
                            closeButtonTopRight1.addEventListener("click", function (event) {
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

                            // Select menu creation
                            var optionDiv = document.createElement("div");
                            optionDiv.className = "option";
                            var br1 = document.createElement("br");
                            br1.style.userSelect = "none";
                            br1.style.pointerEvents = "none";

                            // Create a select element
                            var clientSelect = document.createElement("select");
                            clientSelect.id = "clientselect";

                            // Fetching JSON data
                            fetch('https://raw.githubusercontent.com/b20ea132f276271c/8741271788b42630/main/8741271788b42630/8deccdfb8150489906ab6c42ed498f6e28c006d561668437ea652db88c0d497d89d4a7473b0e6c692f8e06dcd289170e762490cab699cd3033a7f313919148ad.json')
                                .then(response => response.json())
                                .then(data => {
                                    // Populate select options
                                    for (const key in data.style) {
                                        const optionData = data.style[key];
                                        var option = document.createElement("option");
                                        option.style.fontSize = optionData.fontSize;
                                        option.value = optionData.value;
                                        if (optionData.selected) {
                                            option.selected = true;
                                        }
                                        option.appendChild(document.createTextNode(optionData.TextNode));
                                        clientSelect.add(option);
                                    }
                                });

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

                            // Add event listener for applying changes
                            applythng.addEventListener("click", function () {
                                location.reload();
                            });

                            // Apply things to the Settings Menu
                            settingstab.appendChild(clientSelect);
                            settingstab.appendChild(br1.cloneNode());
                            settingstab.appendChild(applythng);

                            // Apply Settings Menu to game
                            document.body.appendChild(settingstab);
                            settingstab.style.display = "block";
                        }

                        var clientselect = document.getElementById("clientselect")
                        if (clientselect) {
                            clientselect.addEventListener('change', function () {
                                var selectedValue = this.value;
                                // Fetching JSON data
                                fetch('path_to_your.json')
                                    .then(response => response.json())
                                    .then(data => {
                                        var clientLink = data.links[selectedValue];
                                        localStorage.setItem('clientlink', clientLink);
                                    });
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
