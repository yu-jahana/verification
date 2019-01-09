// ==UserScript==
// @name         アドジェネ広告IDわかるマン
// @namespace    https://vcs.mediba.jp/gist/hosoyama/073fd95525c13208a84eb47fd0bd418f
// @updateURL    https://vcs.mediba.jp/gist/hosoyama/073fd95525c13208a84eb47fd0bd418f/raw/AdGenerationIdViewer.user.js
// @downloadURL  https://vcs.mediba.jp/gist/hosoyama/073fd95525c13208a84eb47fd0bd418f/raw/AdGenerationIdViewer.user.js
// @version      0.7
// @description  アドジェネの広告IDをオーバーレイ
// @author       hosoyama@mediba.jp
// @match        https://*/*
// @grant        none
// @run-at       document-start
// @noframes
// ==/UserScript==

(function() {
    function view(target, loader) {
        if (!target || !loader || target.getElementsByClassName('adg-id-viewer').length) {
            return;
        }

        const params = loader.src.match(/\?(.+)/)[1]
            .split('&')
            .map(kv => { const a = kv.split('='); return {[a[0]]: a[1] } })
            .reduce((a, b) => ({...a, ...b}));

        const debug = document.createElement('div');
        debug.className = 'adg-id-viewer';
        debug.innerText = `${params.id}/${params.adType}/${params.displayid}/${params.targetID}`;

        target.className += ' adg-id-viewer-parent';
        target.appendChild(debug);
    }

    const style = document.createElement('style');
    style.textContent = `
        .adg-id-viewer-parent {
            position: relative;
        }
        .adg-id-viewer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid #33f;
            border-radius: 4px;
            padding: 4px;
            line-height: 1;
            font-size: 10px;
            font-weight: bold;
            color: #33f;
            background-color: #ccf;
            pointer-events: none;
            text-align: center;
            white-space: nowrap;
            box-shadow: 0 0 4px #000;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('adg.loaded', function(e) {
        const loader = Array.from(document.querySelectorAll('script[src*="adg-script-loader.js"]'))
            .find(s=> s.src.includes(`targetID=${e.detail.targetID}&`));

        view(document.getElementById(e.detail.targetID), loader);
    }, false);

    /*
    Array.from(document.querySelectorAll('script[src*="adg-script-loader.js"]'))
        .forEach(e => {
            const target = e.src.match(/[?&]targetID=([^&]+)/);
            if (target) {
                view(document.getElementById(target[1]), e);
            }
        });
    */
})();
