// ==UserScript==
// @name         Tree Place Overlay
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Keep the canvas beautiful!
// @author       oralekin from osu! /r/osuplace
// @author       Worfox /r/PlaceTrees
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Questlog/TreePlaceOverlay/raw/main/TreePlaceOverlay.user.js
// @downloadURL  https://github.com/Questlog/TreePlaceOverlay/raw/main/TreePlaceOverlay.user.js
// @grant        none
// ==/UserScript==
var overlayElement;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            overlayElement = document.createElement("img");
            overlayElement.id = "overlayId";
            overlayElement.src = "https://raw.githubusercontent.com/Questlog/TreePlaceOverlay/main/treeoverlay.png";
            overlayElement.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated; image-rendering: -moz-crisp-edges;width: 2000px; height: 1000px;";
            console.log(overlayElement);
            return overlayElement;
        })())
        //show / hide overlay
        function doc_keyUp(e) {
            if (e.key === 'o') {        
                if (overlayElement.style.display === "none") {
                    overlayElement.style.display = "block";
                    console.log("show");
                } else {
                    overlayElement.style.display = "none";
                    console.log("hide");
                }
            }
        }
        document.addEventListener('keyup', doc_keyUp, false);
    }, false);
}
