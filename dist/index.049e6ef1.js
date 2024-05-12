// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"isici":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ae70b669049e6ef1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kT7zd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayMode", ()=>(0, _chunkTRZ6EGBZMjs.g));
parcelHelpers.export(exports, "DotLottiePlayer", ()=>a) //# sourceMappingURL=out.js.map
;
var _chunkODPU3M3ZMjs = require("./chunk-ODPU3M3Z.mjs");
var _chunkTRZ6EGBZMjs = require("./chunk-TRZ6EGBZ.mjs");
var _chunkHDDX7F4AMjs = require("./chunk-HDDX7F4A.mjs");
var _chunkZWH2ESXTMjs = require("./chunk-ZWH2ESXT.mjs");
var M = (r, t)=>t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? {
        ...t,
        finisher (e) {
            e.createProperty(t.key, r);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer () {
            typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
        },
        finisher (e) {
            e.createProperty(t.key, r);
        }
    }, x = (r, t, e)=>{
    t.constructor.createProperty(e, r);
};
function p(r) {
    return (t, e)=>e !== void 0 ? x(r, t, e) : M(r, t);
}
function k(r) {
    return p({
        ...r,
        state: !0
    });
}
var v = ({ finisher: r, descriptor: t })=>(e, i)=>{
        var n;
        if (i === void 0) {
            let l = (n = e.originalKey) !== null && n !== void 0 ? n : e.key, h = t != null ? {
                kind: "method",
                placement: "prototype",
                key: l,
                descriptor: t(e.key)
            } : {
                ...e,
                key: l
            };
            return r != null && (h.finisher = function(b) {
                r(b, l);
            }), h;
        }
        {
            let l = e.constructor;
            t !== void 0 && Object.defineProperty(e, i, t(i)), r == null || r(l, i);
        }
    };
function O(r, t) {
    return v({
        descriptor: (e)=>{
            let i = {
                get () {
                    var n, l;
                    return (l = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(r)) !== null && l !== void 0 ? l : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                let n = typeof e == "symbol" ? Symbol() : "__" + e;
                i.get = function() {
                    var l, h;
                    return this[n] === void 0 && (this[n] = (h = (l = this.renderRoot) === null || l === void 0 ? void 0 : l.querySelector(r)) !== null && h !== void 0 ? h : null), this[n];
                };
            }
            return i;
        }
    });
}
var L;
((L = window.HTMLSlotElement) === null || L === void 0 ? void 0 : L.prototype.assignedElements) != null ? (r, t)=>r.assignedElements(t) : (r, t)=>r.assignedNodes(t).filter((e)=>e.nodeType === Node.ELEMENT_NODE);
var I = {
    name: "@dotlottie/player-component",
    version: "2.7.12",
    description: "dotLottie animation player web component.",
    repository: "https://github.com/dotlottie/player-component.git",
    homepage: "https://dotlottie.io/players",
    bugs: "https://github.com/dotlottie/player-component/issues",
    author: "Jawish Hameed <jawish@lottiefiles.com>",
    license: "MIT",
    main: "dist/dotlottie-player.js",
    module: "dist/dotlottie-player.mjs",
    types: "dist/dotlottie-player.d.ts",
    files: [
        "dist"
    ],
    keywords: [
        "dotlottie",
        "animation",
        "web component",
        "component",
        "lit-element",
        "player"
    ],
    scripts: {
        build: "tsup",
        "cypress:open": "cypress open --component",
        dev: "tsup --watch",
        lint: "eslint .",
        "lint:fix": "eslint --fix",
        test: "cypress run --component",
        "type-check": "tsc --noEmit"
    },
    dependencies: {
        "@dotlottie/common": "workspace:*",
        lit: "^2.7.5"
    },
    devDependencies: {
        "@vitejs/plugin-legacy": "^4.1.0",
        "axe-core": "^4.7.2",
        cypress: "^12.11.0",
        "cypress-axe": "^1.4.0",
        "cypress-ct-lit": "^0.3.2",
        "lottie-web": "^5.12.2",
        terser: "^5.19.0",
        tsup: "^7.2.0",
        typescript: "^4.7.4",
        vite: "^4.3.9"
    },
    publishConfig: {
        access: "public"
    },
    browserslist: [
        "> 3%"
    ]
};
var T = "dotlottie-player";
var a = class extends (0, _chunkODPU3M3ZMjs.b) {
    defaultTheme = "";
    container;
    playMode = (0, _chunkTRZ6EGBZMjs.g).Normal;
    autoplay = !1;
    background = "transparent";
    controls = !1;
    direction = 1;
    hover = !1;
    loop;
    renderer = "svg";
    speed = 1;
    src;
    intermission = 0;
    activeAnimationId = null;
    light = !1;
    worker = !1;
    activeStateId;
    _seeker = 0;
    _dotLottieCommonPlayer;
    _io;
    _loop;
    _renderer = "svg";
    _unsubscribeListeners;
    _hasMultipleAnimations = !1;
    _hasMultipleThemes = !1;
    _hasMultipleStates = !1;
    _popoverIsOpen = !1;
    _animationsTabIsOpen = !1;
    _statesTabIsOpen = !1;
    _styleTabIsOpen = !1;
    _themesForCurrentAnimation = [];
    _statesForCurrentAnimation = [];
    _parseLoop(t) {
        let e = parseInt(t, 10);
        return Number.isInteger(e) && e > 0 ? (this._loop = e, e) : typeof t == "string" && [
            "true",
            "false"
        ].includes(t) ? (this._loop = t === "true", this._loop) : ((0, _chunkTRZ6EGBZMjs.c)("loop must be a positive integer or a boolean"), !1);
    }
    _handleSeekChange(t) {
        let e = t.currentTarget;
        try {
            let i = parseInt(e.value, 10);
            if (!this._dotLottieCommonPlayer) return;
            let n = i / 100 * this._dotLottieCommonPlayer.totalFrames;
            this.seek(n);
        } catch  {
            throw (0, _chunkTRZ6EGBZMjs.a)("Error while seeking animation");
        }
    }
    _initListeners() {
        let t = this._dotLottieCommonPlayer;
        if (t === void 0) {
            (0, _chunkTRZ6EGBZMjs.c)("player not initialized - cannot add event listeners", "dotlottie-player-component");
            return;
        }
        this._unsubscribeListeners = t.state.subscribe((e$1, i)=>{
            this._seeker = e$1.seeker, this.requestUpdate(), i.currentState !== e$1.currentState && this.dispatchEvent(new CustomEvent(e$1.currentState)), this.dispatchEvent(new CustomEvent((0, _chunkTRZ6EGBZMjs.e).Frame, {
                detail: {
                    frame: e$1.frame,
                    seeker: e$1.seeker
                }
            })), this.dispatchEvent(new CustomEvent((0, _chunkTRZ6EGBZMjs.e).VisibilityChange, {
                detail: {
                    visibilityPercentage: e$1.visibilityPercentage
                }
            }));
        }), t.addEventListener("complete", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkTRZ6EGBZMjs.e).Complete));
        }), t.addEventListener("loopComplete", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkTRZ6EGBZMjs.e).LoopComplete));
        }), t.addEventListener("DOMLoaded", ()=>{
            let e$1 = this.getManifest();
            e$1 && e$1.themes && (this._themesForCurrentAnimation = e$1.themes.filter((i)=>i.animations.includes(this.getCurrentAnimationId() || ""))), e$1 && e$1.states && (this._hasMultipleStates = e$1.states.length > 0, this._statesForCurrentAnimation = [], e$1.states.forEach((i)=>{
                this._statesForCurrentAnimation.push(i);
            })), this.dispatchEvent(new CustomEvent((0, _chunkTRZ6EGBZMjs.e).Ready));
        }), t.addEventListener("data_ready", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkTRZ6EGBZMjs.e).DataReady));
        }), t.addEventListener("data_failed", ()=>{
            this.dispatchEvent(new CustomEvent((0, _chunkTRZ6EGBZMjs.e).DataFail));
        }), window && window.addEventListener("click", (e)=>this._clickOutListener(e));
    }
    async load(t, e, i) {
        if (!this.shadowRoot) return;
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.destroy(), this._dotLottieCommonPlayer = new (0, _chunkTRZ6EGBZMjs.j)(t, this.container, {
            rendererSettings: e != null ? e : {
                scaleMode: "noScale",
                clearCanvas: !0,
                progressiveLoad: !0,
                hideOnTransparent: !0
            },
            hover: this.hasAttribute("hover") ? this.hover : void 0,
            renderer: this.hasAttribute("renderer") ? this._renderer : void 0,
            loop: this.hasAttribute("loop") ? this._loop : void 0,
            direction: this.hasAttribute("direction") ? this.direction === 1 ? 1 : -1 : void 0,
            speed: this.hasAttribute("speed") ? this.speed : void 0,
            intermission: this.hasAttribute("intermission") ? Number(this.intermission) : void 0,
            playMode: this.hasAttribute("playMode") ? this.playMode : void 0,
            autoplay: this.hasAttribute("autoplay") ? this.autoplay : void 0,
            activeAnimationId: this.hasAttribute("activeAnimationId") ? this.activeAnimationId : void 0,
            defaultTheme: this.hasAttribute("defaultTheme") ? this.defaultTheme : void 0,
            light: this.light,
            worker: this.worker,
            activeStateId: this.hasAttribute("activeStateId") ? this.activeStateId : void 0
        }), await this._dotLottieCommonPlayer.load(i);
        let n = this.getManifest();
        this._hasMultipleAnimations = this.animationCount() > 1, n && (n.themes && (this._themesForCurrentAnimation = n.themes.filter((l)=>l.animations.includes(this.getCurrentAnimationId() || "")), this._hasMultipleThemes = n.themes.length > 0), n.states && (this._hasMultipleStates = n.states.length > 0, this._statesForCurrentAnimation = [], n.states.forEach((l)=>{
            this._statesForCurrentAnimation.push(l);
        }))), this._initListeners();
    }
    getCurrentAnimationId() {
        var t;
        return (t = this._dotLottieCommonPlayer) == null ? void 0 : t.currentAnimationId;
    }
    animationCount() {
        var t;
        return this._dotLottieCommonPlayer && ((t = this._dotLottieCommonPlayer.getManifest()) == null ? void 0 : t.animations.length) || 0;
    }
    animations() {
        if (!this._dotLottieCommonPlayer) return [];
        let t = this._dotLottieCommonPlayer.getManifest();
        return (t == null ? void 0 : t.animations.map((e)=>e.id)) || [];
    }
    currentAnimation() {
        return !this._dotLottieCommonPlayer || !this._dotLottieCommonPlayer.currentAnimationId ? "" : this._dotLottieCommonPlayer.currentAnimationId;
    }
    getState() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.getState() : (0, _chunkTRZ6EGBZMjs.i);
    }
    getManifest() {
        var t;
        return (t = this._dotLottieCommonPlayer) == null ? void 0 : t.getManifest();
    }
    getLottie() {
        var t;
        return (t = this._dotLottieCommonPlayer) == null ? void 0 : t.getAnimationInstance();
    }
    getVersions() {
        return {
            lottieWebVersion: (0, _chunkTRZ6EGBZMjs.j).getLottieWebVersion(),
            dotLottiePlayerVersion: `${I.version}`
        };
    }
    previous(t) {
        var e;
        (e = this._dotLottieCommonPlayer) == null || e.previous(t);
    }
    next(t) {
        var e;
        (e = this._dotLottieCommonPlayer) == null || e.next(t);
    }
    reset() {
        var t;
        (t = this._dotLottieCommonPlayer) == null || t.reset();
    }
    play(t, e) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.play(t, e);
    }
    pause() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.pause();
    }
    stop() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stop();
    }
    playOnShow(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.playOnShow(t);
    }
    stopPlayOnShow() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stopPlayOnShow();
    }
    playOnScroll(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.playOnScroll(t);
    }
    stopPlayOnScroll() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stopPlayOnScroll();
    }
    seek(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.seek(t);
    }
    snapshot(t = !0) {
        if (!this.shadowRoot) return "";
        let e = this.shadowRoot.querySelector(".animation svg"), i = new XMLSerializer().serializeToString(e);
        if (t) {
            let n = document.createElement("a");
            n.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`, n.download = `download_${this._seeker}.svg`, document.body.appendChild(n), n.click(), document.body.removeChild(n);
        }
        return i;
    }
    setTheme(t) {
        var e;
        (e = this._dotLottieCommonPlayer) == null || e.setDefaultTheme(t);
    }
    themes() {
        var e;
        if (!this._dotLottieCommonPlayer) return [];
        let t = this._dotLottieCommonPlayer.getManifest();
        return ((e = t == null ? void 0 : t.themes) == null ? void 0 : e.map((i)=>i.id)) || [];
    }
    getDefaultTheme() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.defaultTheme : "";
    }
    getActiveStateMachine() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.activeStateId : "";
    }
    _freeze() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.freeze();
    }
    setSpeed(t = 1) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setSpeed(t);
    }
    setDirection(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setDirection(t);
    }
    setLooping(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setLoop(t);
    }
    isLooping() {
        return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.loop : !1;
    }
    togglePlay() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.togglePlay();
    }
    toggleLooping() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.toggleLoop();
    }
    setPlayMode(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setMode(t);
    }
    enterInteractiveMode(t) {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.enterInteractiveMode(t);
    }
    exitInteractiveMode() {
        this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.exitInteractiveMode();
    }
    revertToManifestValues(t) {
        var e;
        (e = this._dotLottieCommonPlayer) == null || e.revertToManifestValues(t);
    }
    static get styles() {
        return 0, _chunkODPU3M3ZMjs.c;
    }
    async firstUpdated() {
        var t;
        this.container = (t = this.shadowRoot) == null ? void 0 : t.querySelector("#animation"), "IntersectionObserver" in window && (this._io = new IntersectionObserver((e)=>{
            var i, n;
            e[0] !== void 0 && e[0].isIntersecting ? ((i = this._dotLottieCommonPlayer) == null ? void 0 : i.currentState) === (0, _chunkTRZ6EGBZMjs.f).Frozen && this.play() : ((n = this._dotLottieCommonPlayer) == null ? void 0 : n.currentState) === (0, _chunkTRZ6EGBZMjs.f).Playing && this._freeze();
        }), this._io.observe(this.container)), this.loop ? this._parseLoop(this.loop) : this.hasAttribute("loop") && this._parseLoop("true"), this.renderer === "svg" ? this._renderer = "svg" : this.renderer === "canvas" ? this._renderer = "canvas" : this.renderer === "html" && (this._renderer = "html"), this.src && await this.load(this.src);
    }
    disconnectedCallback() {
        var t, e;
        this._io && (this._io.disconnect(), this._io = void 0), (t = this._dotLottieCommonPlayer) == null || t.destroy(), (e = this._unsubscribeListeners) == null || e.call(this), window && window.removeEventListener("click", (i)=>this._clickOutListener(i));
    }
    _clickOutListener(t) {
        !t.composedPath().some((i)=>i instanceof HTMLElement ? i.classList.contains("popover") || i.id === "lottie-animation-options" : !1) && this._popoverIsOpen && (this._popoverIsOpen = !1, this.requestUpdate());
    }
    renderControls() {
        var i, n, l, h, b;
        let t = ((i = this._dotLottieCommonPlayer) == null ? void 0 : i.currentState) === (0, _chunkTRZ6EGBZMjs.f).Playing, e = ((n = this._dotLottieCommonPlayer) == null ? void 0 : n.currentState) === (0, _chunkTRZ6EGBZMjs.f).Paused;
        return (0, _chunkODPU3M3ZMjs.a)`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations ? (0, _chunkODPU3M3ZMjs.a)`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            ` : (0, _chunkODPU3M3ZMjs.a)``}
        <button
          id="lottie-play-button"
          @click=${()=>{
            this.togglePlay();
        }}
          class=${t || e ? `active ${this._hasMultipleAnimations ? "btn-spacing-center" : "btn-spacing-right"}` : `${this._hasMultipleAnimations ? "btn-spacing-center" : "btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${t ? (0, _chunkODPU3M3ZMjs.a)`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              ` : (0, _chunkODPU3M3ZMjs.a)`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations ? (0, _chunkODPU3M3ZMjs.a)`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            ` : (0, _chunkODPU3M3ZMjs.a)``}
        <input
          id="lottie-seeker-input"
          class="seeker ${((l = this._dotLottieCommonPlayer) == null ? void 0 : l.direction) === -1 ? "to-left" : ""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${(s)=>this._handleSeekChange(s)}
          @mousedown=${()=>{
            this._freeze();
        }}
          @mouseup=${()=>{
            var s;
            (s = this._dotLottieCommonPlayer) == null || s.unfreeze();
        }}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${(h = this._dotLottieCommonPlayer) != null && h.loop ? "active btn-spacing-left" : "btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations || this._hasMultipleThemes || this._hasMultipleStates ? (0, _chunkODPU3M3ZMjs.a)`
              <button
                id="lottie-animation-options"
                @click=${()=>{
            this._popoverIsOpen = !this._popoverIsOpen, this.requestUpdate();
        }}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen ? "var(--lottie-player-toolbar-icon-hover-color)" : ""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            ` : (0, _chunkODPU3M3ZMjs.a)``}
      </div>
      ${this._popoverIsOpen ? (0, _chunkODPU3M3ZMjs.a)`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length > 0 ? "84px" : "auto"}"
            >
              ${!this._animationsTabIsOpen && !this._styleTabIsOpen && !this._statesTabIsOpen ? (0, _chunkODPU3M3ZMjs.a)`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{
            this._animationsTabIsOpen = !this._animationsTabIsOpen, this.requestUpdate();
        }}
                      @keydown=${(s)=>{
            (s.code === "Space" || s.code === "Enter") && (this._animationsTabIsOpen = !this._animationsTabIsOpen, this.requestUpdate());
        }}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  ` : (0, _chunkODPU3M3ZMjs.a)``}
              ${this._hasMultipleThemes && !this._styleTabIsOpen && !this._animationsTabIsOpen && !this._statesTabIsOpen ? (0, _chunkODPU3M3ZMjs.a)` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{
            this._styleTabIsOpen = !this._styleTabIsOpen, this.requestUpdate();
        }}
                    @keydown=${(s)=>{
            (s.code === "Space" || s.code === "Enter") && (this._styleTabIsOpen = !this._styleTabIsOpen, this.requestUpdate());
        }}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>` : ""}
              ${this._hasMultipleStates && !this._styleTabIsOpen && !this._animationsTabIsOpen && !this._statesTabIsOpen ? (0, _chunkODPU3M3ZMjs.a)` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{
            this._statesTabIsOpen = !this._statesTabIsOpen, this.requestUpdate();
        }}
                    @keydown=${(s)=>{
            (s.code === "Space" || s.code === "Enter") && (this._statesTabIsOpen = !this._statesTabIsOpen, this.requestUpdate());
        }}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>` : ""}
              ${this._animationsTabIsOpen ? (0, _chunkODPU3M3ZMjs.a)`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{
            this._animationsTabIsOpen = !this._animationsTabIsOpen, this.requestUpdate();
        }}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map((s)=>(0, _chunkODPU3M3ZMjs.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${s}`}
                                @click=${()=>{
                this._animationsTabIsOpen = !this._animationsTabIsOpen, this._popoverIsOpen = !this._popoverIsOpen, this.play(s), this.requestUpdate();
            }}
                                @keydown=${(c)=>{
                (c.code === "Space" || c.code === "Enter") && (this._animationsTabIsOpen = !this._animationsTabIsOpen, this._popoverIsOpen = !this._popoverIsOpen, this.play(s), this.requestUpdate());
            }}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation() === s ? (0, _chunkODPU3M3ZMjs.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      ` : (0, _chunkODPU3M3ZMjs.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> ` : (0, _chunkODPU3M3ZMjs.a)``}
              ${this._styleTabIsOpen ? (0, _chunkODPU3M3ZMjs.a)`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{
            this._styleTabIsOpen = !this._styleTabIsOpen, this.requestUpdate();
        }}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${((b = this._dotLottieCommonPlayer) == null ? void 0 : b.defaultTheme) === "" ? (0, _chunkODPU3M3ZMjs.a)`` : (0, _chunkODPU3M3ZMjs.a)`
                              <button
                                class="reset-btn"
                                @click=${()=>{
            this.setTheme(""), this.requestUpdate();
        }}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map((s)=>(0, _chunkODPU3M3ZMjs.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${s.id}"
                                @click=${()=>{
                this.setTheme(s.id);
            }}
                                @keydown=${(c)=>{
                (c.code === "Space" || c.code === "Enter") && this.setTheme(s.id);
            }}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme() === s.id ? (0, _chunkODPU3M3ZMjs.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      ` : (0, _chunkODPU3M3ZMjs.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>` : (0, _chunkODPU3M3ZMjs.a)``}
              ${this._statesTabIsOpen ? (0, _chunkODPU3M3ZMjs.a)`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{
            this._statesTabIsOpen = !this._statesTabIsOpen, this.requestUpdate();
        }}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{
            this.exitInteractiveMode(), this.requestUpdate();
        }}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map((s)=>(0, _chunkODPU3M3ZMjs.a)`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${s}"
                                @click=${()=>{
                this.enterInteractiveMode(s);
            }}
                                @keydown=${(c)=>{
                (c.code === "Space" || c.code === "Enter") && this.enterInteractiveMode(s);
            }}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine() === s ? (0, _chunkODPU3M3ZMjs.a)`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      ` : (0, _chunkODPU3M3ZMjs.a)`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${s}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>` : (0, _chunkODPU3M3ZMjs.a)``}
            </div>
          ` : (0, _chunkODPU3M3ZMjs.a)``}
    `;
    }
    render() {
        var i;
        let t = this.controls ? "main controls" : "main", e = this.controls ? "animation controls" : "animation";
        return (0, _chunkODPU3M3ZMjs.a)`
      <div id="animation-container" class=${t} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${e} style="background:${this.background};">
          ${((i = this._dotLottieCommonPlayer) == null ? void 0 : i.currentState) === (0, _chunkTRZ6EGBZMjs.f).Error ? (0, _chunkODPU3M3ZMjs.a)` <div class="error">⚠️</div> ` : void 0}
        </div>
        ${this.controls ? this.renderControls() : void 0}
      </div>
    `;
    }
};
(0, _chunkZWH2ESXTMjs.a)([
    p({
        type: String
    })
], a.prototype, "defaultTheme", 2), (0, _chunkZWH2ESXTMjs.a)([
    O("#animation")
], a.prototype, "container", 2), (0, _chunkZWH2ESXTMjs.a)([
    p()
], a.prototype, "playMode", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: Boolean
    })
], a.prototype, "autoplay", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: String
    })
], a.prototype, "background", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: Boolean
    })
], a.prototype, "controls", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: Number
    })
], a.prototype, "direction", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: Boolean
    })
], a.prototype, "hover", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: String
    })
], a.prototype, "loop", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: String
    })
], a.prototype, "renderer", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: Number
    })
], a.prototype, "speed", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: String
    })
], a.prototype, "src", 2), (0, _chunkZWH2ESXTMjs.a)([
    p()
], a.prototype, "intermission", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: String
    })
], a.prototype, "activeAnimationId", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: Boolean
    })
], a.prototype, "light", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: Boolean
    })
], a.prototype, "worker", 2), (0, _chunkZWH2ESXTMjs.a)([
    p({
        type: String
    })
], a.prototype, "activeStateId", 2), (0, _chunkZWH2ESXTMjs.a)([
    k()
], a.prototype, "_seeker", 2);
customElements.get(T) || customElements.define(T, a); /*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/ 

},{"./chunk-ODPU3M3Z.mjs":"4VkXp","./chunk-TRZ6EGBZ.mjs":"7lJx4","./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VkXp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>Ut) //# sourceMappingURL=out.js.map
;
parcelHelpers.export(exports, "b", ()=>w);
parcelHelpers.export(exports, "c", ()=>Kt);
var N = window, R = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, M = Symbol(), tt = new WeakMap, S = class {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== M) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o, e = this.t;
        if (R && t === void 0) {
            let o = e !== void 0 && e.length === 1;
            o && (t = tt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), o && tt.set(e, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}, et = (r)=>new S(typeof r == "string" ? r : r + "", void 0, M), j = (r, ...t)=>{
    let e = r.length === 1 ? r[0] : t.reduce((o, i, n)=>o + ((s)=>{
            if (s._$cssResult$ === !0) return s.cssText;
            if (typeof s == "number") return s;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(i) + r[n + 1], r[0]);
    return new S(e, r, M);
}, L = (r, t)=>{
    R ? r.adoptedStyleSheets = t.map((e)=>e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e)=>{
        let o = document.createElement("style"), i = N.litNonce;
        i !== void 0 && o.setAttribute("nonce", i), o.textContent = e.cssText, r.appendChild(o);
    });
}, O = R ? (r)=>r : (r)=>r instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (let o of t.cssRules)e += o.cssText;
        return et(e);
    })(r) : r;
var B, T = window, ot = T.trustedTypes, xt = ot ? ot.emptyScript : "", it = T.reactiveElementPolyfillSupport, I = {
    toAttribute (r, t) {
        switch(t){
            case Boolean:
                r = r ? xt : null;
                break;
            case Object:
            case Array:
                r = r == null ? r : JSON.stringify(r);
        }
        return r;
    },
    fromAttribute (r, t) {
        let e = r;
        switch(t){
            case Boolean:
                e = r !== null;
                break;
            case Number:
                e = r === null ? null : Number(r);
                break;
            case Object:
            case Array:
                try {
                    e = JSON.parse(r);
                } catch  {
                    e = null;
                }
        }
        return e;
    }
}, rt = (r, t)=>t !== r && (t == t || r == r), D = {
    attribute: !0,
    type: String,
    converter: I,
    reflect: !1,
    hasChanged: rt
}, V = "finalized", f = class extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var e;
        this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        let t = [];
        return this.elementProperties.forEach((e, o)=>{
            let i = this._$Ep(o, e);
            i !== void 0 && (this._$Ev.set(i, o), t.push(i));
        }), t;
    }
    static createProperty(t, e = D) {
        if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
            let o = typeof t == "symbol" ? Symbol() : "__" + t, i = this.getPropertyDescriptor(t, o, e);
            i !== void 0 && Object.defineProperty(this.prototype, t, i);
        }
    }
    static getPropertyDescriptor(t, e, o) {
        return {
            get () {
                return this[e];
            },
            set (i) {
                let n = this[t];
                this[e] = i, this.requestUpdate(t, n, o);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || D;
    }
    static finalize() {
        if (this.hasOwnProperty(V)) return !1;
        this[V] = !0;
        let t = Object.getPrototypeOf(this);
        if (t.finalize(), t.h !== void 0 && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            let e = this.properties, o = [
                ...Object.getOwnPropertyNames(e),
                ...Object.getOwnPropertySymbols(e)
            ];
            for (let i of o)this.createProperty(i, e[i]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(t) {
        let e = [];
        if (Array.isArray(t)) {
            let o = new Set(t.flat(1 / 0).reverse());
            for (let i of o)e.unshift(O(i));
        } else t !== void 0 && e.push(O(t));
        return e;
    }
    static _$Ep(t, e) {
        let o = e.attribute;
        return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((e)=>this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e)=>e(this));
    }
    addController(t) {
        var e, o;
        ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((o = t.hostConnected) === null || o === void 0 || o.call(t));
    }
    removeController(t) {
        var e;
        (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, e)=>{
            this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
        });
    }
    createRenderRoot() {
        var t;
        let e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return L(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
        var t;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e)=>{
            var o;
            return (o = e.hostConnected) === null || o === void 0 ? void 0 : o.call(e);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        (t = this._$ES) === null || t === void 0 || t.forEach((e)=>{
            var o;
            return (o = e.hostDisconnected) === null || o === void 0 ? void 0 : o.call(e);
        });
    }
    attributeChangedCallback(t, e, o) {
        this._$AK(t, o);
    }
    _$EO(t, e, o = D) {
        var i;
        let n = this.constructor._$Ep(t, o);
        if (n !== void 0 && o.reflect === !0) {
            let s = (((i = o.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? o.converter : I).toAttribute(e, o.type);
            this._$El = t, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$El = null;
        }
    }
    _$AK(t, e) {
        var o;
        let i = this.constructor, n = i._$Ev.get(t);
        if (n !== void 0 && this._$El !== n) {
            let s = i.getPropertyOptions(n), h = typeof s.converter == "function" ? {
                fromAttribute: s.converter
            } : ((o = s.converter) === null || o === void 0 ? void 0 : o.fromAttribute) !== void 0 ? s.converter : I;
            this._$El = n, this[n] = h.fromAttribute(e, s.type), this._$El = null;
        }
    }
    requestUpdate(t, e, o) {
        let i = !0;
        t !== void 0 && (((o = o || this.constructor.getPropertyOptions(t)).hasChanged || rt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(t, o))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (e) {
            Promise.reject(e);
        }
        let t = this.scheduleUpdate();
        return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, n)=>this[n] = i), this._$Ei = void 0);
        let e = !1, o = this._$AL;
        try {
            e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$ES) === null || t === void 0 || t.forEach((i)=>{
                var n;
                return (n = i.hostUpdate) === null || n === void 0 ? void 0 : n.call(i);
            }), this.update(o)) : this._$Ek();
        } catch (i) {
            throw e = !1, this._$Ek(), i;
        }
        e && this._$AE(o);
    }
    willUpdate(t) {}
    _$AE(t) {
        var e;
        (e = this._$ES) === null || e === void 0 || e.forEach((o)=>{
            var i;
            return (i = o.hostUpdated) === null || i === void 0 ? void 0 : i.call(o);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$EC !== void 0 && (this._$EC.forEach((e, o)=>this._$EO(o, this[o], e)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
};
f[V] = !0, f.elementProperties = new Map, f.elementStyles = [], f.shadowRootOptions = {
    mode: "open"
}, it == null || it({
    ReactiveElement: f
}), ((B = T.reactiveElementVersions) !== null && B !== void 0 ? B : T.reactiveElementVersions = []).push("1.6.3");
var K, z = window, y = z.trustedTypes, st = y ? y.createPolicy("lit-html", {
    createHTML: (r)=>r
}) : void 0, q = "$lit$", g = `lit$${(Math.random() + "").slice(9)}$`, dt = "?" + g, yt = `<${dt}>`, m = document, k = ()=>m.createComment(""), C = (r)=>r === null || typeof r != "object" && typeof r != "function", ut = Array.isArray, _t = (r)=>ut(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", W = `[ 	
\f\r]`, E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, nt = /-->/g, lt = />/g, b = RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), at = /'/g, ht = /"/g, vt = /^(?:script|style|textarea|title)$/i, ft = (r)=>(t, ...e)=>({
            _$litType$: r,
            strings: t,
            values: e
        }), Ut = ft(1), x = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), ct = new WeakMap, $ = m.createTreeWalker(m, 129, null, !1);
function gt(r, t) {
    if (!Array.isArray(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return st !== void 0 ? st.createHTML(t) : t;
}
var At = (r, t)=>{
    let e = r.length - 1, o = [], i, n = t === 2 ? "<svg>" : "", s = E;
    for(let h = 0; h < e; h++){
        let l = r[h], a, c, p = -1, u = 0;
        for(; u < l.length && (s.lastIndex = u, c = s.exec(l), c !== null);)u = s.lastIndex, s === E ? c[1] === "!--" ? s = nt : c[1] !== void 0 ? s = lt : c[2] !== void 0 ? (vt.test(c[2]) && (i = RegExp("</" + c[2], "g")), s = b) : c[3] !== void 0 && (s = b) : s === b ? c[0] === ">" ? (s = i != null ? i : E, p = -1) : c[1] === void 0 ? p = -2 : (p = s.lastIndex - c[2].length, a = c[1], s = c[3] === void 0 ? b : c[3] === '"' ? ht : at) : s === ht || s === at ? s = b : s === nt || s === lt ? s = E : (s = b, i = void 0);
        let v = s === b && r[h + 1].startsWith("/>") ? " " : "";
        n += s === E ? l + yt : p >= 0 ? (o.push(a), l.slice(0, p) + q + l.slice(p) + g + v) : l + g + (p === -2 ? (o.push(void 0), h) : v);
    }
    return [
        gt(r, n + (r[e] || "<?>") + (t === 2 ? "</svg>" : "")),
        o
    ];
}, U = class r {
    constructor({ strings: t, _$litType$: e }, o){
        let i;
        this.parts = [];
        let n = 0, s = 0, h = t.length - 1, l = this.parts, [a, c] = At(t, e);
        if (this.el = r.createElement(a, o), $.currentNode = this.el.content, e === 2) {
            let p = this.el.content, u = p.firstChild;
            u.remove(), p.append(...u.childNodes);
        }
        for(; (i = $.nextNode()) !== null && l.length < h;){
            if (i.nodeType === 1) {
                if (i.hasAttributes()) {
                    let p = [];
                    for (let u of i.getAttributeNames())if (u.endsWith(q) || u.startsWith(g)) {
                        let v = c[s++];
                        if (p.push(u), v !== void 0) {
                            let mt = i.getAttribute(v.toLowerCase() + q).split(g), H = /([.?@])?(.*)/.exec(v);
                            l.push({
                                type: 1,
                                index: n,
                                name: H[2],
                                strings: mt,
                                ctor: H[1] === "." ? F : H[1] === "?" ? Z : H[1] === "@" ? G : A
                            });
                        } else l.push({
                            type: 6,
                            index: n
                        });
                    }
                    for (let u of p)i.removeAttribute(u);
                }
                if (vt.test(i.tagName)) {
                    let p = i.textContent.split(g), u = p.length - 1;
                    if (u > 0) {
                        i.textContent = y ? y.emptyScript : "";
                        for(let v = 0; v < u; v++)i.append(p[v], k()), $.nextNode(), l.push({
                            type: 2,
                            index: ++n
                        });
                        i.append(p[u], k());
                    }
                }
            } else if (i.nodeType === 8) {
                if (i.data === dt) l.push({
                    type: 2,
                    index: n
                });
                else {
                    let p = -1;
                    for(; (p = i.data.indexOf(g, p + 1)) !== -1;)l.push({
                        type: 7,
                        index: n
                    }), p += g.length - 1;
                }
            }
            n++;
        }
    }
    static createElement(t, e) {
        let o = m.createElement("template");
        return o.innerHTML = t, o;
    }
};
function _(r, t, e = r, o) {
    var i, n, s, h;
    if (t === x) return t;
    let l = o !== void 0 ? (i = e._$Co) === null || i === void 0 ? void 0 : i[o] : e._$Cl, a = C(t) ? void 0 : t._$litDirective$;
    return (l == null ? void 0 : l.constructor) !== a && ((n = l == null ? void 0 : l._$AO) === null || n === void 0 || n.call(l, !1), a === void 0 ? l = void 0 : (l = new a(r), l._$AT(r, e, o)), o !== void 0 ? ((s = (h = e)._$Co) !== null && s !== void 0 ? s : h._$Co = [])[o] = l : e._$Cl = l), l !== void 0 && (t = _(r, l._$AS(r, t.values), l, o)), t;
}
var J = class {
    constructor(t, e){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var e;
        let { el: { content: o }, parts: i } = this._$AD, n = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : m).importNode(o, !0);
        $.currentNode = n;
        let s = $.nextNode(), h = 0, l = 0, a = i[0];
        for(; a !== void 0;){
            if (h === a.index) {
                let c;
                a.type === 2 ? c = new P(s, s.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(s, a.name, a.strings, this, t) : a.type === 6 && (c = new Q(s, this, t)), this._$AV.push(c), a = i[++l];
            }
            h !== (a == null ? void 0 : a.index) && (s = $.nextNode(), h++);
        }
        return $.currentNode = m, n;
    }
    v(t) {
        let e = 0;
        for (let o of this._$AV)o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, e), e += o.strings.length - 2) : o._$AI(t[e])), e++;
    }
}, P = class r {
    constructor(t, e, o, i){
        var n;
        this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = o, this.options = i, this._$Cp = (n = i == null ? void 0 : i.isConnected) === null || n === void 0 || n;
    }
    get _$AU() {
        var t, e;
        return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode, e = this._$AM;
        return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, e = this) {
        t = _(this, t, e), C(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : _t(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== d && C(this._$AH) ? this._$AA.nextSibling.data = t : this.$(m.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var e;
        let { values: o, _$litType$: i } = t, n = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = U.createElement(gt(i.h, i.h[0]), this.options)), i);
        if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === n) this._$AH.v(o);
        else {
            let s = new J(n, this), h = s.u(this.options);
            s.v(o), this.$(h), this._$AH = s;
        }
    }
    _$AC(t) {
        let e = ct.get(t.strings);
        return e === void 0 && ct.set(t.strings, e = new U(t)), e;
    }
    T(t) {
        ut(this._$AH) || (this._$AH = [], this._$AR());
        let e = this._$AH, o, i = 0;
        for (let n of t)i === e.length ? e.push(o = new r(this.k(k()), this.k(k()), this, this.options)) : o = e[i], o._$AI(n), i++;
        i < e.length && (this._$AR(o && o._$AB.nextSibling, i), e.length = i);
    }
    _$AR(t = this._$AA.nextSibling, e) {
        var o;
        for((o = this._$AP) === null || o === void 0 || o.call(this, !1, !0, e); t && t !== this._$AB;){
            let i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var e;
        this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
    }
}, A = class {
    constructor(t, e, o, i, n){
        this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = n, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String), this.strings = o) : this._$AH = d;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, e = this, o, i) {
        let n = this.strings, s = !1;
        if (n === void 0) t = _(this, t, e, 0), s = !C(t) || t !== this._$AH && t !== x, s && (this._$AH = t);
        else {
            let h = t, l, a;
            for(t = n[0], l = 0; l < n.length - 1; l++)a = _(this, h[o + l], e, l), a === x && (a = this._$AH[l]), s || (s = !C(a) || a !== this._$AH[l]), a === d ? t = d : t !== d && (t += (a != null ? a : "") + n[l + 1]), this._$AH[l] = a;
        }
        s && !i && this.j(t);
    }
    j(t) {
        t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "");
    }
}, F = class extends A {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === d ? void 0 : t;
    }
}, wt = y ? y.emptyScript : "", Z = class extends A {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== d ? this.element.setAttribute(this.name, wt) : this.element.removeAttribute(this.name);
    }
}, G = class extends A {
    constructor(t, e, o, i, n){
        super(t, e, o, i, n), this.type = 5;
    }
    _$AI(t, e = this) {
        var o;
        if ((t = (o = _(this, t, e, 0)) !== null && o !== void 0 ? o : d) === x) return;
        let i = this._$AH, n = t === d && i !== d || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, s = t !== d && (i === d || n);
        n && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var e, o;
        typeof this._$AH == "function" ? this._$AH.call((o = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && o !== void 0 ? o : this.element, t) : this._$AH.handleEvent(t);
    }
}, Q = class {
    constructor(t, e, o){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = o;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        _(this, t);
    }
};
var pt = z.litHtmlPolyfillSupport;
pt == null || pt(U, P), ((K = z.litHtmlVersions) !== null && K !== void 0 ? K : z.litHtmlVersions = []).push("2.8.0");
var bt = (r, t, e)=>{
    var o, i;
    let n = (o = e == null ? void 0 : e.renderBefore) !== null && o !== void 0 ? o : t, s = n._$litPart$;
    if (s === void 0) {
        let h = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : null;
        n._$litPart$ = s = new P(t.insertBefore(k(), h), h, void 0, e != null ? e : {});
    }
    return s._$AI(r), s;
};
var X, Y;
var w = class extends f {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        let o = super.createRenderRoot();
        return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = o.firstChild), o;
    }
    update(t) {
        let e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = bt(e, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
    }
    render() {
        return x;
    }
};
w.finalized = !0, w._$litElement$ = !0, (X = globalThis.litElementHydrateSupport) === null || X === void 0 || X.call(globalThis, {
    LitElement: w
});
var $t = globalThis.litElementPolyfillSupport;
$t == null || $t({
    LitElement: w
});
((Y = globalThis.litElementVersions) !== null && Y !== void 0 ? Y : globalThis.litElementVersions = []).push("3.3.3");
var Kt = j`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`; /*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lJx4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>g) //# sourceMappingURL=out.js.map
;
parcelHelpers.export(exports, "b", ()=>et);
parcelHelpers.export(exports, "c", ()=>k);
parcelHelpers.export(exports, "d", ()=>rn);
parcelHelpers.export(exports, "e", ()=>Zi);
parcelHelpers.export(exports, "f", ()=>tn);
parcelHelpers.export(exports, "g", ()=>en);
parcelHelpers.export(exports, "h", ()=>q);
parcelHelpers.export(exports, "i", ()=>nn);
parcelHelpers.export(exports, "j", ()=>gn);
var Buffer = require("f1eb749541984fbe").Buffer;
var ee = {}, Be = function(t, e, i, n, r) {
    var o = new Worker(ee[e] || (ee[e] = URL.createObjectURL(new Blob([
        t + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
    ], {
        type: "text/javascript"
    }))));
    return o.onmessage = function(a) {
        var l = a.data, s = l.$e$;
        if (s) {
            var u = new Error(s[0]);
            u.code = s[1], u.stack = s[2], r(u, null);
        } else r(null, l);
    }, o.postMessage(i, n), o;
}, F = Uint8Array, Z = Uint16Array, le = Int32Array, zt = new F([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]), Dt = new F([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]), ue = new F([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]), he = function(t, e) {
    for(var i = new Z(31), n = 0; n < 31; ++n)i[n] = e += 1 << t[n - 1];
    for(var r = new le(i[30]), n = 1; n < 30; ++n)for(var o = i[n]; o < i[n + 1]; ++o)r[o] = o - i[n] << 5 | n;
    return {
        b: i,
        r
    };
}, de = he(zt, 2), Ut = de.b, Je = de.r;
Ut[28] = 258, Je[258] = 28;
var Re = he(Dt, 0), ce = Re.b, gt = new Z(32768);
for(b = 0; b < 32768; ++b)K = (b & 43690) >> 1 | (b & 21845) << 1, K = (K & 52428) >> 2 | (K & 13107) << 2, K = (K & 61680) >> 4 | (K & 3855) << 4, gt[b] = ((K & 65280) >> 8 | (K & 255) << 8) >> 1;
var K, b, rt = function(t, e, i) {
    for(var n = t.length, r = 0, o = new Z(e); r < n; ++r)t[r] && ++o[t[r] - 1];
    var a = new Z(e);
    for(r = 1; r < e; ++r)a[r] = a[r - 1] + o[r - 1] << 1;
    var l;
    if (i) {
        l = new Z(1 << e);
        var s = 15 - e;
        for(r = 0; r < n; ++r)if (t[r]) for(var u = r << 4 | t[r], d = e - t[r], h = a[t[r] - 1]++ << d, c = h | (1 << d) - 1; h <= c; ++h)l[gt[h] >> s] = u;
    } else for(l = new Z(n), r = 0; r < n; ++r)t[r] && (l[r] = gt[a[t[r] - 1]++] >> 15 - t[r]);
    return l;
}, ht = new F(288);
for(b = 0; b < 144; ++b)ht[b] = 8;
var b;
for(b = 144; b < 256; ++b)ht[b] = 9;
var b;
for(b = 256; b < 280; ++b)ht[b] = 7;
var b;
for(b = 280; b < 288; ++b)ht[b] = 8;
var b, fe = new F(32);
for(b = 0; b < 32; ++b)fe[b] = 5;
var b, pe = rt(ht, 9, 1), me = rt(fe, 5, 1), vt = function(t) {
    for(var e = t[0], i = 1; i < t.length; ++i)t[i] > e && (e = t[i]);
    return e;
}, V = function(t, e, i) {
    var n = e / 8 | 0;
    return (t[n] | t[n + 1] << 8) >> (e & 7) & i;
}, yt = function(t, e) {
    var i = e / 8 | 0;
    return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) >> (e & 7);
}, _e = function(t) {
    return (t + 7) / 8 | 0;
}, bt = function(t, e, i) {
    return (e == null || e < 0) && (e = 0), (i == null || i > t.length) && (i = t.length), new F(t.subarray(e, i));
}, ve = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
], x = function(t, e, i) {
    var n = new Error(e || ve[t]);
    if (n.code = t, Error.captureStackTrace && Error.captureStackTrace(n, x), !i) throw n;
    return n;
}, ye = function(t, e, i, n) {
    var r = t.length, o = n ? n.length : 0;
    if (!r || e.f && !e.l) return i || new F(0);
    var a = !i, l = a || e.i != 2, s = e.i;
    a && (i = new F(r * 3));
    var u = function(Yt) {
        var Zt = i.length;
        if (Yt > Zt) {
            var te = new F(Math.max(Zt * 2, Yt));
            te.set(i), i = te;
        }
    }, d = e.f || 0, h = e.p || 0, c = e.b || 0, p = e.l, m = e.d, f = e.m, v = e.n, _ = r * 8;
    do {
        if (!p) {
            d = V(t, h, 1);
            var S = V(t, h + 1, 3);
            if (h += 3, S) {
                if (S == 1) p = pe, m = me, f = 9, v = 5;
                else if (S == 2) {
                    var y = V(t, h, 31) + 257, A = V(t, h + 10, 15) + 4, P = y + V(t, h + 5, 31) + 1;
                    h += 14;
                    for(var N = new F(P), O = new F(19), I = 0; I < A; ++I)O[ue[I]] = V(t, h + I * 3, 7);
                    h += A * 3;
                    for(var T = vt(O), B = (1 << T) - 1, C = rt(O, T, 1), I = 0; I < P;){
                        var z = C[V(t, h, B)];
                        h += z & 15;
                        var j = z >> 4;
                        if (j < 16) N[I++] = j;
                        else {
                            var U = 0, E = 0;
                            for(j == 16 ? (E = 3 + V(t, h, 3), h += 2, U = N[I - 1]) : j == 17 ? (E = 3 + V(t, h, 7), h += 3) : j == 18 && (E = 11 + V(t, h, 127), h += 7); E--;)N[I++] = U;
                        }
                    }
                    var Q = N.subarray(0, y), X = N.subarray(y);
                    f = vt(Q), v = vt(X), p = rt(Q, f, 1), m = rt(X, v, 1);
                } else x(1);
            } else {
                var j = _e(h) + 4, Lt = t[j - 4] | t[j - 3] << 8, Ot = j + Lt;
                if (Ot > r) {
                    s && x(0);
                    break;
                }
                l && u(c + Lt), i.set(t.subarray(j, Ot), c), e.b = c += Lt, e.p = h = Ot * 8, e.f = d;
                continue;
            }
            if (h > _) {
                s && x(0);
                break;
            }
        }
        l && u(c + 131072);
        for(var Ve = (1 << f) - 1, $e = (1 << v) - 1, Mt = h;; Mt = h){
            var U = p[yt(t, h) & Ve], nt = U >> 4;
            if (h += U & 15, h > _) {
                s && x(0);
                break;
            }
            if (U || x(2), nt < 256) i[c++] = nt;
            else if (nt == 256) {
                Mt = h, p = null;
                break;
            } else {
                var Kt = nt - 254;
                if (nt > 264) {
                    var I = nt - 257, lt = zt[I];
                    Kt = V(t, h, (1 << lt) - 1) + Ut[I], h += lt;
                }
                var At = m[yt(t, h) & $e], Pt = At >> 4;
                At || x(3), h += At & 15;
                var X = ce[Pt];
                if (Pt > 3) {
                    var lt = Dt[Pt];
                    X += yt(t, h) & (1 << lt) - 1, h += lt;
                }
                if (h > _) {
                    s && x(0);
                    break;
                }
                l && u(c + 131072);
                var Qt = c + Kt;
                if (c < X) {
                    var Xt = o - X, qe = Math.min(X, Qt);
                    for(Xt + c < 0 && x(3); c < qe; ++c)i[c] = n[Xt + c];
                }
                for(; c < Qt; ++c)i[c] = i[c - X];
            }
        }
        e.l = p, e.p = Mt, e.b = c, e.f = d, p && (d = 1, e.m = f, e.d = m, e.n = v);
    }while (!d);
    return c != i.length && a ? bt(i, 0, c) : i.subarray(0, c);
}, He = new F(0), We = function(t, e) {
    var i = {};
    for(var n in t)i[n] = t[n];
    for(var n in e)i[n] = e[n];
    return i;
}, ie = function(t, e, i) {
    for(var n = t(), r = t.toString(), o = r.slice(r.indexOf("[") + 1, r.lastIndexOf("]")).replace(/\s+/g, "").split(","), a = 0; a < n.length; ++a){
        var l = n[a], s = o[a];
        if (typeof l == "function") {
            e += ";" + s + "=";
            var u = l.toString();
            if (l.prototype) {
                if (u.indexOf("[native code]") != -1) {
                    var d = u.indexOf(" ", 8) + 1;
                    e += u.slice(d, u.indexOf("(", d));
                } else {
                    e += u;
                    for(var h in l.prototype)e += ";" + s + ".prototype." + h + "=" + l.prototype[h].toString();
                }
            } else e += u;
        } else i[s] = l;
    }
    return e;
}, _t = [], Ge = function(t) {
    var e = [];
    for(var i in t)t[i].buffer && e.push((t[i] = new t[i].constructor(t[i])).buffer);
    return e;
}, Ke = function(t, e, i, n) {
    if (!_t[i]) {
        for(var r = "", o = {}, a = t.length - 1, l = 0; l < a; ++l)r = ie(t[l], r, o);
        _t[i] = {
            c: ie(t[a], r, o),
            e: o
        };
    }
    var s = We({}, _t[i].e);
    return Be(_t[i].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", i, s, Ge(s), n);
}, Qe = function() {
    return [
        F,
        Z,
        le,
        zt,
        Dt,
        ue,
        Ut,
        ce,
        pe,
        me,
        gt,
        ve,
        rt,
        vt,
        V,
        yt,
        _e,
        bt,
        x,
        ye,
        Vt,
        ge,
        be
    ];
}, ge = function(t) {
    return postMessage(t, [
        t.buffer
    ]);
}, be = function(t) {
    return t && {
        out: t.size && new F(t.size),
        dictionary: t.dictionary
    };
}, Xe = function(t, e, i, n, r, o) {
    var a = Ke(i, n, r, function(l, s) {
        a.terminate(), o(l, s);
    });
    return a.postMessage([
        t,
        e
    ], e.consume ? [
        t.buffer
    ] : []), function() {
        a.terminate();
    };
}, W = function(t, e) {
    return t[e] | t[e + 1] << 8;
}, J = function(t, e) {
    return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0;
}, Ct = function(t, e) {
    return J(t, e) + J(t, e + 4) * 4294967296;
};
function Ye(t, e, i) {
    return i || (i = e, e = {}), typeof i != "function" && x(7), Xe(t, e, [
        Qe
    ], function(n) {
        return ge(Vt(n.data[0], be(n.data[1])));
    }, 1, i);
}
function Vt(t, e) {
    return ye(t, {
        i: 2
    }, e && e.out, e && e.dictionary);
}
var Tt = typeof TextDecoder < "u" && new TextDecoder, Ze = 0;
try {
    Tt.decode(He, {
        stream: !0
    }), Ze = 1;
} catch  {}
var ti = function(t) {
    for(var e = "", i = 0;;){
        var n = t[i++], r = (n > 127) + (n > 223) + (n > 239);
        if (i + r > t.length) return {
            s: e,
            r: bt(t, i - 1)
        };
        r ? r == 3 ? (n = ((n & 15) << 18 | (t[i++] & 63) << 12 | (t[i++] & 63) << 6 | t[i++] & 63) - 65536, e += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : r & 1 ? e += String.fromCharCode((n & 31) << 6 | t[i++] & 63) : e += String.fromCharCode((n & 15) << 12 | (t[i++] & 63) << 6 | t[i++] & 63) : e += String.fromCharCode(n);
    }
};
function ot(t, e) {
    if (e) {
        for(var i = "", n = 0; n < t.length; n += 16384)i += String.fromCharCode.apply(null, t.subarray(n, n + 16384));
        return i;
    } else {
        if (Tt) return Tt.decode(t);
        var r = ti(t), o = r.s, i = r.r;
        return i.length && x(8), o;
    }
}
var ei = function(t, e) {
    return e + 30 + W(t, e + 26) + W(t, e + 28);
}, ii = function(t, e, i) {
    var n = W(t, e + 28), r = ot(t.subarray(e + 46, e + 46 + n), !(W(t, e + 8) & 2048)), o = e + 46 + n, a = J(t, e + 20), l = i && a == 4294967295 ? ni(t, o) : [
        a,
        J(t, e + 24),
        J(t, e + 42)
    ], s = l[0], u = l[1], d = l[2];
    return [
        W(t, e + 10),
        s,
        u,
        r,
        o + W(t, e + 30) + W(t, e + 32),
        d
    ];
}, ni = function(t, e) {
    for(; W(t, e) != 1; e += 4 + W(t, e + 2));
    return [
        Ct(t, e + 12),
        Ct(t, e + 4),
        Ct(t, e + 20)
    ];
}, ne = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(t) {
    t();
};
function ri(t, e, i) {
    i || (i = e, e = {}), typeof i != "function" && x(7);
    var n = [], r = function() {
        for(var v = 0; v < n.length; ++v)n[v]();
    }, o = {}, a = function(v, _) {
        ne(function() {
            i(v, _);
        });
    };
    ne(function() {
        a = i;
    });
    for(var l = t.length - 22; J(t, l) != 101010256; --l)if (!l || t.length - l > 65558) return a(x(13, 0, 1), null), r;
    var s = W(t, l + 8);
    if (s) {
        var u = s, d = J(t, l + 16), h = d == 4294967295 || u == 65535;
        if (h) {
            var c = J(t, l - 12);
            h = J(t, c) == 101075792, h && (u = s = J(t, c + 32), d = J(t, c + 48));
        }
        for(var p = e && e.filter, m = function(v) {
            var _ = ii(t, d, h), S = _[0], y = _[1], A = _[2], P = _[3], N = _[4], O = _[5], I = ei(t, O);
            d = N;
            var T = function(C, z) {
                C ? (r(), a(C, null)) : (z && (o[P] = z), --s || a(null, o));
            };
            if (!p || p({
                name: P,
                size: y,
                originalSize: A,
                compression: S
            })) {
                if (!S) T(null, bt(t, I, I + y));
                else if (S == 8) {
                    var B = t.subarray(I, I + y);
                    if (y < 32e4) try {
                        T(null, Vt(B, {
                            out: new F(A)
                        }));
                    } catch (C) {
                        T(C, null);
                    }
                    else n.push(Ye(B, {
                        size: A
                    }, T));
                } else T(x(14, "unknown compression type " + S, 1), null);
            } else T(null, null);
        }, f = 0; f < u; ++f)m(f);
    } else a(null, {});
    return r;
}
function oi(t) {
    return (Array.isArray(t) ? t : t.issues).reduce((e, i)=>{
        if (i.path) {
            let n = i.path.map(({ key: r })=>r).join(".");
            e.nested[n] = [
                ...e.nested[n] || [],
                i.message
            ];
        } else e.root = [
            ...e.root || [],
            i.message
        ];
        return e;
    }, {
        nested: {}
    });
}
var ai = class extends Error {
    issues;
    constructor(t){
        super(t[0].message), this.name = "ValiError", this.issues = t;
    }
};
function si(t, e) {
    return {
        reason: t == null ? void 0 : t.reason,
        validation: e.validation,
        origin: (t == null ? void 0 : t.origin) || "value",
        message: e.message,
        input: e.input,
        abortEarly: t == null ? void 0 : t.abortEarly,
        abortPipeEarly: t == null ? void 0 : t.abortPipeEarly
    };
}
function li(t, e) {
    return {
        reason: e,
        origin: t == null ? void 0 : t.origin,
        abortEarly: t == null ? void 0 : t.abortEarly,
        abortPipeEarly: t == null ? void 0 : t.abortPipeEarly
    };
}
function Y(t, e, i, n) {
    if (!e || !e.length) return {
        output: t
    };
    let r, o, a = t;
    for (let l of e){
        let s = l(a);
        if (s.issue) {
            r = r || li(i, n);
            let u = si(r, s.issue);
            if (o ? o.push(u) : o = [
                u
            ], r.abortEarly || r.abortPipeEarly) break;
        } else a = s.output;
    }
    return o ? {
        issues: o
    } : {
        output: a
    };
}
function H(t, e) {
    return !t || typeof t == "string" ? [
        t,
        e
    ] : [
        void 0,
        t
    ];
}
function G(t, e, i, n, r, o) {
    return {
        issues: [
            {
                reason: e,
                validation: i,
                origin: (t == null ? void 0 : t.origin) || "value",
                message: n,
                input: r,
                issues: o,
                abortEarly: t == null ? void 0 : t.abortEarly,
                abortPipeEarly: t == null ? void 0 : t.abortPipeEarly
            }
        ]
    };
}
function ui(t = []) {
    return {
        schema: "any",
        async: !1,
        _parse (e, i) {
            return Y(e, t, i, "any");
        }
    };
}
function ut(t, e, i) {
    let [n, r] = H(e, i);
    return {
        schema: "array",
        array: {
            item: t
        },
        async: !1,
        _parse (o, a) {
            if (!Array.isArray(o)) return G(a, "type", "array", n || "Invalid type", o);
            let l, s = [];
            for(let u = 0; u < o.length; u++){
                let d = o[u], h = t._parse(d, a);
                if (h.issues) {
                    let c = {
                        schema: "array",
                        input: o,
                        key: u,
                        value: d
                    };
                    for (let p of h.issues)p.path ? p.path.unshift(c) : p.path = [
                        c
                    ], l == null || l.push(p);
                    if (l || (l = h.issues), a != null && a.abortEarly) break;
                } else s.push(h.output);
            }
            return l ? {
                issues: l
            } : Y(s, r, a, "array");
        }
    };
}
function Et(t, e) {
    let [i, n] = H(t, e);
    return {
        schema: "boolean",
        async: !1,
        _parse (r, o) {
            return typeof r != "boolean" ? G(o, "type", "boolean", i || "Invalid type", r) : Y(r, n, o, "boolean");
        }
    };
}
function re(t, e) {
    return {
        schema: "literal",
        literal: t,
        async: !1,
        _parse (i, n) {
            return i !== t ? G(n, "type", "literal", e || "Invalid type", i) : {
                output: i
            };
        }
    };
}
function hi(t, e) {
    return {
        schema: "native_enum",
        nativeEnum: t,
        async: !1,
        _parse (i, n) {
            return Object.values(t).includes(i) ? {
                output: i
            } : G(n, "type", "native_enum", e || "Invalid type", i);
        }
    };
}
function R(t, e) {
    let [i, n] = H(t, e);
    return {
        schema: "number",
        async: !1,
        _parse (r, o) {
            return typeof r != "number" ? G(o, "type", "number", i || "Invalid type", r) : Y(r, n, o, "number");
        }
    };
}
function $(t, e, i) {
    let [n, r] = H(e, i), o;
    return {
        schema: "object",
        object: t,
        async: !1,
        _parse (a, l) {
            if (!a || typeof a != "object") return G(l, "type", "object", n || "Invalid type", a);
            o = o || Object.entries(t);
            let s, u = {};
            for (let [d, h] of o){
                let c = a[d], p = h._parse(c, l);
                if (p.issues) {
                    let m = {
                        schema: "object",
                        input: a,
                        key: d,
                        value: c
                    };
                    for (let f of p.issues)f.path ? f.path.unshift(m) : f.path = [
                        m
                    ], s == null || s.push(f);
                    if (s || (s = p.issues), l != null && l.abortEarly) break;
                } else u[d] = p.output;
            }
            return s ? {
                issues: s
            } : Y(u, r, l, "object");
        }
    };
}
function w(t) {
    return {
        schema: "optional",
        wrapped: t,
        async: !1,
        _parse (e, i) {
            return e === void 0 ? {
                output: e
            } : t._parse(e, i);
        }
    };
}
function M(t, e) {
    let [i, n] = H(t, e);
    return {
        schema: "string",
        async: !1,
        _parse (r, o) {
            return typeof r != "string" ? G(o, "type", "string", i || "Invalid type", r) : Y(r, n, o, "string");
        }
    };
}
function di(t, e, i, n) {
    if (typeof e == "object" && !Array.isArray(e)) {
        let [a, l] = H(i, n);
        return [
            t,
            e,
            a,
            l
        ];
    }
    let [r, o] = H(e, i);
    return [
        M(),
        t,
        r,
        o
    ];
}
var ci = [
    "__proto__",
    "prototype",
    "constructor"
];
function fi(t, e, i, n) {
    let [r, o, a, l] = di(t, e, i, n);
    return {
        schema: "record",
        record: {
            key: r,
            value: o
        },
        async: !1,
        _parse (s, u) {
            if (!s || typeof s != "object") return G(u, "type", "record", a || "Invalid type", s);
            let d, h = {};
            for (let [c, p] of Object.entries(s))if (!ci.includes(c)) {
                let m, f = r._parse(c, {
                    origin: "key",
                    abortEarly: u == null ? void 0 : u.abortEarly,
                    abortPipeEarly: u == null ? void 0 : u.abortPipeEarly
                });
                if (f.issues) {
                    m = {
                        schema: "record",
                        input: s,
                        key: c,
                        value: p
                    };
                    for (let _ of f.issues)_.path = [
                        m
                    ], d == null || d.push(_);
                    if (d || (d = f.issues), u != null && u.abortEarly) break;
                }
                let v = o._parse(p, u);
                if (v.issues) {
                    m = m || {
                        schema: "record",
                        input: s,
                        key: c,
                        value: p
                    };
                    for (let _ of v.issues)_.path ? _.path.unshift(m) : _.path = [
                        m
                    ], d == null || d.push(_);
                    if (d || (d = v.issues), u != null && u.abortEarly) break;
                }
                !f.issues && !v.issues && (h[f.output] = v.output);
            }
            return d ? {
                issues: d
            } : Y(h, l, u, "record");
        }
    };
}
function pi(t, e, i) {
    if (typeof t == "object" && !Array.isArray(t)) {
        let [o, a] = H(e, i);
        return [
            t,
            o,
            a
        ];
    }
    let [n, r] = H(t, e);
    return [
        void 0,
        n,
        r
    ];
}
function oe(t, e, i, n) {
    let [r, o, a] = pi(e, i, n);
    return {
        schema: "tuple",
        tuple: {
            items: t,
            rest: r
        },
        async: !1,
        _parse (l, s) {
            if (!Array.isArray(l) || !r && t.length !== l.length || r && t.length > l.length) return G(s, "type", "tuple", o || "Invalid type", l);
            let u, d = [];
            for(let h = 0; h < t.length; h++){
                let c = l[h], p = t[h]._parse(c, s);
                if (p.issues) {
                    let m = {
                        schema: "tuple",
                        input: l,
                        key: h,
                        value: c
                    };
                    for (let f of p.issues)f.path ? f.path.unshift(m) : f.path = [
                        m
                    ], u == null || u.push(f);
                    if (u || (u = p.issues), s != null && s.abortEarly) break;
                } else d[h] = p.output;
            }
            if (r) for(let h = t.length; h < l.length; h++){
                let c = l[h], p = r._parse(c, s);
                if (p.issues) {
                    let m = {
                        schema: "tuple",
                        input: l,
                        key: h,
                        value: c
                    };
                    for (let f of p.issues)f.path ? f.path.unshift(m) : f.path = [
                        m
                    ], u == null || u.push(f);
                    if (u || (u = p.issues), s != null && s.abortEarly) break;
                } else d[h] = p.output;
            }
            return u ? {
                issues: u
            } : Y(d, a, s, "tuple");
        }
    };
}
function jt(t, e) {
    return {
        schema: "union",
        union: t,
        async: !1,
        _parse (i, n) {
            let r, o;
            for (let a of t){
                let l = a._parse(i, n);
                if (l.issues) {
                    if (r) for (let s of l.issues)r.push(s);
                    else r = l.issues;
                } else {
                    o = [
                        l.output
                    ];
                    break;
                }
            }
            return o ? {
                output: o[0]
            } : G(n, "type", "union", e || "Invalid type", i, r);
        }
    };
}
function dt(t, e, i) {
    let [n, r] = H(e, i);
    return $(t.reduce((o, a)=>({
            ...o,
            ...a.object
        }), {}), n, r);
}
function mi(t, e, i, n) {
    let [r, o] = H(i, n);
    return $(Object.entries(t.object).reduce((a, [l, s])=>e.includes(l) ? a : {
            ...a,
            [l]: s
        }, {}), r, o);
}
function _i(t, e, i) {
    let n = t._parse(e, i);
    return n.issues ? {
        success: !1,
        error: new ai(n.issues),
        issues: n.issues
    } : {
        success: !0,
        data: n.output,
        output: n.output
    };
}
function xt(t, e) {
    return (i)=>i > t ? {
            issue: {
                validation: "max_value",
                message: e || "Invalid value",
                input: i
            }
        } : {
            output: i
        };
}
function Ft(t, e) {
    return (i)=>i < t ? {
            issue: {
                validation: "min_value",
                message: e || "Invalid value",
                input: i
            }
        } : {
            output: i
        };
}
var vi = Object.create, $t = Object.defineProperty, yi = Object.getOwnPropertyDescriptor, we = Object.getOwnPropertyNames, gi = Object.getPrototypeOf, bi = Object.prototype.hasOwnProperty, wi = (t, e, i)=>e in t ? $t(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : t[e] = i, ct = (t, e)=>function() {
        return e || (0, t[we(t)[0]])((e = {
            exports: {}
        }).exports, e), e.exports;
    }, Si = (t, e, i, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let r of we(e))!bi.call(t, r) && r !== i && $t(t, r, {
        get: ()=>e[r],
        enumerable: !(n = yi(e, r)) || n.enumerable
    });
    return t;
}, Ii = (t, e, i)=>(i = t != null ? vi(gi(t)) : {}, Si(e || !t || !t.__esModule ? $t(i, "default", {
        value: t,
        enumerable: !0
    }) : i, t)), ki = (t, e, i)=>(wi(t, typeof e != "symbol" ? e + "" : e, i), i), Li = ct({
    "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.copy = void 0;
        var e = (i, n, r = 0, o = 0, a = i.width - r, l = i.height - o, s = 0, u = 0)=>{
            if (r = r | 0, o = o | 0, a = a | 0, l = l | 0, s = s | 0, u = u | 0, a <= 0 || l <= 0) return;
            let d = new Uint32Array(i.data.buffer), h = new Uint32Array(n.data.buffer);
            for(let c = 0; c < l; c++){
                let p = o + c;
                if (p < 0 || p >= i.height) continue;
                let m = u + c;
                if (!(m < 0 || m >= n.height)) for(let f = 0; f < a; f++){
                    let v = r + f;
                    if (v < 0 || v >= i.width) continue;
                    let _ = s + f;
                    if (_ < 0 || _ >= n.width) continue;
                    let S = p * i.width + v, y = m * n.width + _;
                    h[y] = d[S];
                }
            }
        };
        t.copy = e;
    }
}), Oi = ct({
    "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CreateImageFactory = (e = [
            0,
            0,
            0,
            0
        ], i = 4)=>{
            if (i = Math.floor(i), isNaN(i) || i < 1) throw TypeError("channels should be a positive non-zero number");
            if (!("length" in e) || e.length < i) throw TypeError(`fill should be iterable with at least ${i} members`);
            e = new Uint8ClampedArray(e).slice(0, i);
            let n = e.every((r)=>r === 0);
            return (r, o, a)=>{
                if (r === void 0 || o === void 0) throw TypeError("Not enough arguments");
                if (r = Math.floor(r), o = Math.floor(o), isNaN(r) || r < 1 || isNaN(o) || o < 1) throw TypeError("Index or size is negative or greater than the allowed amount");
                let l = r * o * i;
                if (a === void 0 && (a = new Uint8ClampedArray(l)), a instanceof Uint8ClampedArray) {
                    if (a.length !== l) throw TypeError("Index or size is negative or greater than the allowed amount");
                    if (!n) for(let s = 0; s < o; s++)for(let u = 0; u < r; u++){
                        let d = (s * r + u) * i;
                        for(let h = 0; h < i; h++)a[d + h] = e[h];
                    }
                    return {
                        get width () {
                            return r;
                        },
                        get height () {
                            return o;
                        },
                        get data () {
                            return a;
                        }
                    };
                }
                throw TypeError("Expected data to be Uint8ClampedArray or undefined");
            };
        }, t.createImage = t.CreateImageFactory();
    }
}), Mi = ct({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.filters = void 0;
        var e = 14, i = (o, a)=>{
            if (o <= -a || o >= a || o == 0) return 0;
            let l = o * Math.PI;
            return Math.sin(l) / l * Math.sin(l / a) / (l / a);
        }, n = (o)=>Math.round(o * ((1 << e) - 1)), r = (o, a, l, s, u)=>{
            let d = u ? 2 : 3, h = 1 / l, c = Math.min(1, l), p = d / c, m = Math.floor((p + 1) * 2), f = new Int16Array((m + 2) * a), v = 0;
            for(let _ = 0; _ < a; _++){
                let S = (_ + .5) * h + s, y = Math.max(0, Math.floor(S - p)), A = Math.min(o - 1, Math.ceil(S + p)), P = A - y + 1, N = new Float32Array(P), O = new Int16Array(P), I = 0, T = 0;
                for(let E = y; E <= A; E++){
                    let Q = i((E + .5 - S) * c, d);
                    I += Q, N[T] = Q, T++;
                }
                let B = 0;
                for(let E = 0; E < N.length; E++){
                    let Q = N[E] / I;
                    B += Q, O[E] = n(Q);
                }
                O[a >> 1] += n(1 - B);
                let C = 0;
                for(; C < O.length && O[C] === 0;)C++;
                let z = O.length - 1;
                for(; z > 0 && O[z] === 0;)z--;
                let j = y + C, U = z - C + 1;
                f[v++] = j, f[v++] = U, f.set(O.subarray(C, z + 1), v), v += U;
            }
            return f;
        };
        t.filters = r;
    }
}), Ai = ct({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convolve = void 0;
        var e = 14, i = (n, r, o, a, l, s)=>{
            let u = 0, d = 0;
            for(let h = 0; h < a; h++){
                let c = 0;
                for(let p = 0; p < l; p++){
                    let m = s[c++], f = u + m * 4 | 0, v = 0, _ = 0, S = 0, y = 0;
                    for(let A = s[c++]; A > 0; A--){
                        let P = s[c++];
                        v = v + P * n[f] | 0, _ = _ + P * n[f + 1] | 0, S = S + P * n[f + 2] | 0, y = y + P * n[f + 3] | 0, f = f + 4 | 0;
                    }
                    r[d] = v + 8192 >> e, r[d + 1] = _ + 8192 >> e, r[d + 2] = S + 8192 >> e, r[d + 3] = y + 8192 >> e, d = d + a * 4 | 0;
                }
                d = (h + 1) * 4 | 0, u = (h + 1) * o * 4 | 0;
            }
        };
        t.convolve = i;
    }
}), Pi = ct({
    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js" (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.lanczos2 = t.lanczos = void 0;
        var e = Li(), i = Oi(), n = Mi(), r = Ai(), o = (s, u, d = !1)=>{
            let h = u.width / s.width, c = u.height / s.height, p = n.filters(s.width, u.width, h, 0, d), m = n.filters(s.height, u.height, c, 0, d), f = new Uint8ClampedArray(u.width * s.height * 4);
            r.convolve(s.data, f, s.width, s.height, u.width, p), r.convolve(f, u.data, s.height, u.width, u.height, m);
        }, a = (s, u, d = 0, h = 0, c = s.width - d, p = s.height - h, m = 0, f = 0, v = u.width - m, _ = u.height - f)=>{
            if (d = d | 0, h = h | 0, c = c | 0, p = p | 0, m = m | 0, f = f | 0, v = v | 0, _ = _ | 0, c <= 0 || p <= 0 || v <= 0 || _ <= 0) return;
            if (d === 0 && h === 0 && c === s.width && p === s.height && m === 0 && f === 0 && v === u.width && _ === u.height) {
                o(s, u);
                return;
            }
            let S = i.createImage(c, p), y = i.createImage(v, _);
            e.copy(s, S, d, h), o(S, y), e.copy(y, u, 0, 0, y.width, y.height, m, f);
        };
        t.lanczos = a;
        var l = (s, u, d = 0, h = 0, c = s.width - d, p = s.height - h, m = 0, f = 0, v = u.width - m, _ = u.height - f)=>{
            if (d = d | 0, h = h | 0, c = c | 0, p = p | 0, m = m | 0, f = f | 0, v = v | 0, _ = _ | 0, c <= 0 || p <= 0 || v <= 0 || _ <= 0) return;
            if (d === 0 && h === 0 && c === s.width && p === s.height && m === 0 && f === 0 && v === u.width && _ === u.height) {
                o(s, u, !0);
                return;
            }
            let S = i.createImage(c, p), y = i.createImage(v, _);
            e.copy(s, S, d, h), o(S, y, !0), e.copy(y, u, 0, 0, y.width, y.height, m, f);
        };
        t.lanczos2 = l;
    }
}), Se = ((t)=>(t.Bounce = "bounce", t.Normal = "normal", t))(Se || {}), Ci = hi(Se), Ie = $({
    autoplay: w(Et()),
    defaultTheme: w(M()),
    direction: w(jt([
        re(1),
        re(-1)
    ])),
    hover: w(Et()),
    id: M(),
    intermission: w(R()),
    loop: w(jt([
        Et(),
        R()
    ])),
    playMode: w(Ci),
    speed: w(R()),
    themeColor: w(M())
}), Ei = $({
    animations: ut(M()),
    id: M()
}), Ti = $({
    activeAnimationId: w(M()),
    animations: ut(Ie),
    author: w(M()),
    custom: w(fi(M(), ui())),
    description: w(M()),
    generator: w(M()),
    keywords: w(M()),
    revision: w(R()),
    themes: w(ut(Ei)),
    states: w(ut(M())),
    version: w(M())
}), qt = mi(Ie, [
    "id"
]), tt = $({
    state: M()
}), ji = tt, xi = dt([
    tt,
    $({
        ms: R()
    })
]), Fi = dt([
    tt,
    $({
        count: R()
    })
]), Ni = tt, zi = tt, Di = tt, Ui = dt([
    tt,
    $({
        threshold: w(ut(R([
            Ft(0),
            xt(1)
        ])))
    })
]), Vi = $({
    onAfter: w(xi),
    onClick: w(ji),
    onComplete: w(Di),
    onEnter: w(Fi),
    onMouseEnter: w(Ni),
    onMouseLeave: w(zi),
    onShow: w(Ui)
}), $i = dt([
    qt,
    $({
        playOnScroll: w(oe([
            R([
                Ft(0),
                xt(1)
            ]),
            R([
                Ft(0),
                xt(1)
            ])
        ])),
        segments: w(jt([
            oe([
                R(),
                R()
            ]),
            M()
        ]))
    })
]);
dt([
    Vi,
    $({
        animationId: w(M()),
        playbackSettings: $i
    })
]);
var qi = {
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    bmp: "image/bmp",
    svg: "image/svg+xml",
    webp: "image/webp",
    mpeg: "audio/mpeg",
    mp3: "audio/mp3"
}, ae = {
    jpeg: [
        255,
        216,
        255
    ],
    png: [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ],
    gif: [
        71,
        73,
        70
    ],
    bmp: [
        66,
        77
    ],
    webp: [
        82,
        73,
        70,
        70,
        87,
        69,
        66,
        80
    ],
    svg: [
        60,
        63,
        120
    ],
    mp3: [
        73,
        68,
        51,
        3,
        0,
        0,
        0,
        0
    ],
    mpeg: [
        73,
        68,
        51,
        3,
        0,
        0,
        0,
        0
    ]
}, Bi = (t)=>{
    let e = null, i = [];
    if (!t) return null;
    let n = t.substring(t.indexOf(",") + 1);
    typeof window > "u" ? e = Buffer.from(n, "base64").toString("binary") : e = atob(n);
    let r = new Uint8Array(e.length);
    for(let o = 0; o < e.length; o += 1)r[o] = e.charCodeAt(o);
    i = Array.from(r.subarray(0, 8));
    for(let o in ae){
        let a = ae[o];
        if (a && i.every((l, s)=>l === a[s])) return qi[o];
    }
    return null;
}, Bt = class extends Error {
    constructor(t, e){
        super(t), ki(this, "code"), this.name = "[dotlottie-js]", this.code = e;
    }
};
function ke(t) {
    let e;
    if (typeof window > "u") e = Buffer.from(t).toString("base64");
    else {
        let i = Array.prototype.map.call(t, (n)=>String.fromCharCode(n)).join("");
        e = window.btoa(i);
    }
    return `data:${Bi(e)};base64,${e}`;
}
function se(t) {
    return "w" in t && "h" in t && !("xt" in t) && "p" in t;
}
function Nt(t) {
    return !("h" in t) && !("w" in t) && "p" in t && "e" in t && "u" in t && "id" in t;
}
async function ft(t, e = ()=>!0) {
    if (!(t instanceof Uint8Array)) throw new Bt("DotLottie not found", "INVALID_DOTLOTTIE");
    return await new Promise((i, n)=>{
        ri(t, {
            filter: e
        }, (r, o)=>{
            r && n(r), i(o);
        });
    });
}
async function Jt(t, e, i) {
    if (!(t instanceof Uint8Array)) throw new Bt("DotLottie not found", "INVALID_DOTLOTTIE");
    return (await ft(t, (n)=>n.name === e && (!i || i(n))))[e];
}
async function wt(t) {
    let e = "manifest.json", i = (await ft(t, (n)=>n.name === e))[e];
    if (!(typeof i > "u")) return JSON.parse(ot(i, !1));
}
async function Ji(t) {
    if (!(t instanceof Uint8Array)) return {
        success: !1,
        error: "DotLottie not found"
    };
    let e = await wt(t);
    if (typeof e > "u") return {
        success: !1,
        error: "Invalid .lottie file, manifest.json is missing"
    };
    let i = _i(Ti, e);
    return i.success ? {
        success: !0
    } : {
        success: !1,
        error: `Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(oi(i.error).nested, null, 2)}`
    };
}
async function Rt(t) {
    let e = new Uint8Array(t), i = await Ji(e);
    if (i.error) throw new Bt(i.error, "INVALID_DOTLOTTIE");
    return e;
}
async function Ri(t, e) {
    let i = await ft(t, (r)=>{
        let o = r.name.replace("audio/", "");
        return r.name.startsWith("audio/") && (!e || e({
            ...r,
            name: o
        }));
    }), n = {};
    for(let r in i){
        let o = i[r];
        if (o instanceof Uint8Array) {
            let a = r.replace("audio/", "");
            n[a] = ke(o);
        }
    }
    return n;
}
async function Hi(t, e) {
    var i;
    let n = new Map;
    for (let [o, a] of Object.entries(e))for (let l of a.assets || [])if (Nt(l)) {
        let s = l.p;
        n.has(s) || n.set(s, new Set), (i = n.get(s)) == null || i.add(o);
    }
    let r = await Ri(t, (o)=>n.has(o.name));
    for (let [o, a] of n){
        let l = r[o];
        if (l) for (let s of a){
            let u = e[s];
            for (let d of (u == null ? void 0 : u.assets) || [])Nt(d) && d.p === o && (d.p = l, d.u = "", d.e = 1);
        }
    }
}
async function Wi(t, e) {
    let i = await ft(t, (r)=>{
        let o = r.name.replace("images/", "");
        return r.name.startsWith("images/") && (!e || e({
            ...r,
            name: o
        }));
    }), n = {};
    for(let r in i){
        let o = i[r];
        if (o instanceof Uint8Array) {
            let a = r.replace("images/", "");
            n[a] = ke(o);
        }
    }
    return n;
}
async function Gi(t, e) {
    var i;
    let n = new Map;
    for (let [o, a] of Object.entries(e))for (let l of a.assets || [])if (se(l)) {
        let s = l.p;
        n.has(s) || n.set(s, new Set), (i = n.get(s)) == null || i.add(o);
    }
    let r = await Wi(t, (o)=>n.has(o.name));
    for (let [o, a] of n){
        let l = r[o];
        if (l) for (let s of a){
            let u = e[s];
            for (let d of (u == null ? void 0 : u.assets) || [])se(d) && d.p === o && (d.p = l, d.u = "", d.e = 1);
        }
    }
}
async function Le(t, e, { inlineAssets: i } = {}, n) {
    let r = `animations/${e}.json`, o = await Jt(t, r, n);
    if (typeof o > "u") return;
    let a = JSON.parse(ot(o, !1));
    if (!i) return a;
    let l = {
        [e]: a
    };
    return await Gi(t, l), await Hi(t, l), a;
}
async function Oe(t, e, i) {
    let n = `themes/${e}.json`, r = await Jt(t, n, i);
    if (!(typeof r > "u")) return JSON.parse(ot(r, !1));
}
async function Me(t, e) {
    let i = {}, n = await ft(t, (r)=>{
        let o = r.name.replace("states/", "").replace(".json", "");
        return r.name.startsWith("states/") && (!e || e({
            ...r,
            name: o
        }));
    });
    for(let r in n){
        let o = n[r];
        if (o instanceof Uint8Array) {
            let a = r.replace("states/", "").replace(".json", "");
            i[a] = ot(o, !1);
        }
    }
    return i;
}
async function Ae(t, e, i) {
    let n = `states/${e}.json`, r = await Jt(t, n, i);
    return typeof r > "u" ? void 0 : JSON.parse(ot(r, !1));
}
Ii(Pi());
function g(t, e = "dotLottie-common") {
    return new Error(`[${e}]: ${t}`);
}
function et(t, e = "dotLottie-common", ...i) {
    console.error(`[${e}]:`, t, ...i);
}
function k(t, e = "dotLottie-common", ...i) {
    console.warn(`[${e}]:`, t, ...i);
}
function Pe(t = "") {
    let e = t.trim(), i = e.lastIndexOf("/"), n = e.substring(i + 1), r = n.indexOf(".");
    return r !== -1 ? n.substring(0, r) : n;
}
function at(t) {
    return [
        "v",
        "ip",
        "op",
        "layers",
        "fr",
        "w",
        "h"
    ].every((e)=>Object.prototype.hasOwnProperty.call(t, e));
}
function Ce(t) {
    let e = t.assets;
    return e ? e.some((i)=>Nt(i)) : !1;
}
function Ee(t) {
    try {
        let e = JSON.parse(t);
        return at(e);
    } catch  {
        return !1;
    }
}
function rn(t, e) {
    let i = Object.keys(t).find((n)=>t[n] === e);
    if (i === void 0) throw new Error("Value not found in the object.");
    return i;
}
function St(t) {
    return JSON.parse(JSON.stringify(t));
}
var Te = class {
    _dotLottie;
    _animationsMap = new Map;
    _themeMap = new Map;
    _stateMachinesMap = new Map;
    _manifest;
    get dotLottie() {
        return this._dotLottie;
    }
    get animationsMap() {
        return this._animationsMap;
    }
    get themeMap() {
        return this._themeMap;
    }
    get stateMachinesMap() {
        return this._stateMachinesMap;
    }
    get manifest() {
        return this._manifest;
    }
    async loadFromUrl(t) {
        let e = await fetch(t, {
            method: "GET",
            mode: "cors"
        });
        if (!e.ok) throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);
        let i = e.headers.get("content-type");
        if (i != null && i.includes("application/json")) {
            let n = await e.json();
            if (!at(n)) throw new Error(`Invalid lottie JSON at ${t}`);
            let r = Pe(t);
            this._animationsMap.set(r, n);
            let o = {
                activeAnimationId: r,
                animations: [
                    {
                        id: r
                    }
                ]
            };
            this._manifest = o;
        } else {
            this._dotLottie = await Rt(await e.arrayBuffer());
            let n = await wt(this._dotLottie);
            if (!n) throw new Error("Manifest not found");
            this._manifest = n;
        }
    }
    loadFromLottieJSON(t) {
        if (!at(t)) throw new Error("Invalid lottie JSON");
        let e = "my-animation";
        this._animationsMap.set(e, t);
        let i = {
            activeAnimationId: e,
            animations: [
                {
                    id: e
                }
            ]
        };
        this._manifest = i;
    }
    async loadFromArrayBuffer(t) {
        this._dotLottie = await Rt(t);
        let e = await wt(this._dotLottie);
        if (!e) throw new Error("Manifest not found");
        this._manifest = e;
    }
    async getAnimation(t) {
        if (this._animationsMap.get(t)) return this._animationsMap.get(t);
        if (!this._dotLottie) return;
        let e = await Le(this._dotLottie, t, {
            inlineAssets: !0
        });
        return e && this._animationsMap.set(t, e), e;
    }
    async getTheme(t) {
        if (this._themeMap.get(t)) return this._themeMap.get(t);
        if (!this._dotLottie) return;
        let e = await Oe(this._dotLottie, t);
        return e && this._themeMap.set(t, e), e;
    }
    async getStateMachines() {
        if (!this._dotLottie) return;
        let t = await Me(this._dotLottie);
        for(let e in t)if (e) {
            let i = t[e];
            if (i) {
                let n = JSON.parse(i);
                if (n) {
                    let r = n.descriptor.id;
                    this._stateMachinesMap.get(r) || this._stateMachinesMap.set(r, n);
                }
            }
        }
        return Array.from(this._stateMachinesMap.values());
    }
    async getStateMachine(t) {
        if (this._stateMachinesMap.get(t)) return this._stateMachinesMap.get(t);
        if (!this._dotLottie) return;
        let e = await Ae(this._dotLottie, t);
        return e && this._stateMachinesMap.set(e.descriptor.id, e), e;
    }
};
function kt() {
    throw new Error("Cycle detected");
}
function Wt() {
    if (st > 1) st--;
    else {
        for(var t, e = !1; pt !== void 0;){
            var i = pt;
            for(pt = void 0, Ht++; i !== void 0;){
                var n = i.o;
                if (i.o = void 0, i.f &= -3, !(8 & i.f) && xe(i)) try {
                    i.c();
                } catch (r) {
                    e || (t = r, e = !0);
                }
                i = n;
            }
        }
        if (Ht = 0, st--, e) throw t;
    }
}
var L = void 0, pt = void 0, st = 0, Ht = 0, It = 0;
function je(t) {
    if (L !== void 0) {
        var e = t.n;
        if (e === void 0 || e.t !== L) return e = {
            i: 0,
            S: t,
            p: L.s,
            n: void 0,
            t: L,
            e: void 0,
            x: void 0,
            r: e
        }, L.s !== void 0 && (L.s.n = e), L.s = e, t.n = e, 32 & L.f && t.S(e), e;
        if (e.i === -1) return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = L.s, e.n = void 0, L.s.n = e, L.s = e), e;
    }
}
function D(t) {
    this.v = t, this.i = 0, this.n = void 0, this.t = void 0;
}
D.prototype.h = function() {
    return !0;
};
D.prototype.S = function(t) {
    this.t !== t && t.e === void 0 && (t.x = this.t, this.t !== void 0 && (this.t.e = t), this.t = t);
};
D.prototype.U = function(t) {
    if (this.t !== void 0) {
        var e = t.e, i = t.x;
        e !== void 0 && (e.x = i, t.e = void 0), i !== void 0 && (i.e = e, t.x = void 0), t === this.t && (this.t = i);
    }
};
D.prototype.subscribe = function(t) {
    var e = this;
    return Xi(function() {
        var i = e.value, n = 32 & this.f;
        this.f &= -33;
        try {
            t(i);
        } finally{
            this.f |= n;
        }
    });
};
D.prototype.valueOf = function() {
    return this.value;
};
D.prototype.toString = function() {
    return this.value + "";
};
D.prototype.toJSON = function() {
    return this.value;
};
D.prototype.peek = function() {
    return this.v;
};
Object.defineProperty(D.prototype, "value", {
    get: function() {
        var t = je(this);
        return t !== void 0 && (t.i = this.i), this.v;
    },
    set: function(t) {
        if (L instanceof it && function() {
            throw new Error("Computed cannot have side-effects");
        }(), t !== this.v) {
            Ht > 100 && kt(), this.v = t, this.i++, It++, st++;
            try {
                for(var e = this.t; e !== void 0; e = e.x)e.t.N();
            } finally{
                Wt();
            }
        }
    }
});
function Ki(t) {
    return new D(t);
}
function xe(t) {
    for(var e = t.s; e !== void 0; e = e.n)if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
    return !1;
}
function Fe(t) {
    for(var e = t.s; e !== void 0; e = e.n){
        var i = e.S.n;
        if (i !== void 0 && (e.r = i), e.S.n = e, e.i = -1, e.n === void 0) {
            t.s = e;
            break;
        }
    }
}
function Ne(t) {
    for(var e = t.s, i = void 0; e !== void 0;){
        var n = e.p;
        e.i === -1 ? (e.S.U(e), n !== void 0 && (n.n = e.n), e.n !== void 0 && (e.n.p = n)) : i = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = n;
    }
    t.s = i;
}
function it(t) {
    D.call(this, void 0), this.x = t, this.s = void 0, this.g = It - 1, this.f = 4;
}
(it.prototype = new D).h = function() {
    if (this.f &= -3, 1 & this.f) return !1;
    if ((36 & this.f) == 32 || (this.f &= -5, this.g === It)) return !0;
    if (this.g = It, this.f |= 1, this.i > 0 && !xe(this)) return this.f &= -2, !0;
    var t = L;
    try {
        Fe(this), L = this;
        var e = this.x();
        (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
    } catch (i) {
        this.v = i, this.f |= 16, this.i++;
    }
    return L = t, Ne(this), this.f &= -2, !0;
};
it.prototype.S = function(t) {
    if (this.t === void 0) {
        this.f |= 36;
        for(var e = this.s; e !== void 0; e = e.n)e.S.S(e);
    }
    D.prototype.S.call(this, t);
};
it.prototype.U = function(t) {
    if (this.t !== void 0 && (D.prototype.U.call(this, t), this.t === void 0)) {
        this.f &= -33;
        for(var e = this.s; e !== void 0; e = e.n)e.S.U(e);
    }
};
it.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for(var t = this.t; t !== void 0; t = t.x)t.t.N();
    }
};
it.prototype.peek = function() {
    if (this.h() || kt(), 16 & this.f) throw this.v;
    return this.v;
};
Object.defineProperty(it.prototype, "value", {
    get: function() {
        1 & this.f && kt();
        var t = je(this);
        if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
        return this.v;
    }
});
function ze(t) {
    var e = t.u;
    if (t.u = void 0, typeof e == "function") {
        st++;
        var i = L;
        L = void 0;
        try {
            e();
        } catch (n) {
            throw t.f &= -2, t.f |= 8, Gt(t), n;
        } finally{
            L = i, Wt();
        }
    }
}
function Gt(t) {
    for(var e = t.s; e !== void 0; e = e.n)e.S.U(e);
    t.x = void 0, t.s = void 0, ze(t);
}
function Qi(t) {
    if (L !== this) throw new Error("Out-of-order effect");
    Ne(this), L = t, this.f &= -2, 8 & this.f && Gt(this), Wt();
}
function mt(t) {
    this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
mt.prototype.c = function() {
    var t = this.S();
    try {
        if (8 & this.f || this.x === void 0) return;
        var e = this.x();
        typeof e == "function" && (this.u = e);
    } finally{
        t();
    }
};
mt.prototype.S = function() {
    1 & this.f && kt(), this.f |= 1, this.f &= -9, ze(this), Fe(this), st++;
    var t = L;
    return L = this, Qi.bind(this, t);
};
mt.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.o = pt, pt = this);
};
mt.prototype.d = function() {
    this.f |= 8, 1 & this.f || Gt(this);
};
function Xi(t) {
    var e = new mt(t);
    try {
        e.c();
    } catch (i) {
        throw e.d(), i;
    }
    return e.d.bind(e);
}
var De = class {
    _state;
    _prevState;
    constructor(t){
        this._prevState = t, this._state = Ki(t);
    }
    setState(t) {
        this._prevState = this._state.value, this._state.value = t;
    }
    subscribe(t) {
        return this._state.subscribe((e)=>t(e, this._prevState));
    }
};
async function Ue(t, e) {
    let [{ DotLottieStateMachineManager: i }] = await Promise.all([
        require("95c48ace31f48df3")
    ]);
    if (!t.length) throw g("No state machines available inside this .lottie!");
    return new i(t, e);
}
var Yi = {
    name: "@dotlottie/common",
    version: "0.7.11",
    type: "module",
    description: "",
    author: "Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",
    license: "MIT",
    engines: {
        node: ">18.0.0"
    },
    module: "dist/index.js",
    main: "dist/index.js",
    types: "dist/index.d.ts",
    files: [
        "dist"
    ],
    keywords: [],
    scripts: {
        build: "tsup",
        dev: "tsup --watch",
        lint: "eslint .",
        "type-check": "tsc --noEmit"
    },
    dependencies: {
        "@dotlottie/dotlottie-js": "^0.7.0",
        "@preact/signals-core": "^1.2.3",
        howler: "^2.2.3",
        "lottie-web": "^5.12.2",
        xstate: "^4.38.1"
    },
    devDependencies: {
        "@lottiefiles/lottie-types": "^1.2.0",
        "@types/howler": "^2.2.8",
        tsup: "^7.2.0",
        typescript: "^4.7.4"
    },
    publishConfig: {
        access: "public"
    }
}, Zi = ((t)=>(t.Complete = "complete", t.DataFail = "data_fail", t.DataReady = "data_ready", t.Error = "error", t.Frame = "frame", t.Freeze = "freeze", t.LoopComplete = "loopComplete", t.Pause = "pause", t.Play = "play", t.Ready = "ready", t.Stop = "stop", t.VisibilityChange = "visibilityChange", t))(Zi || {}), tn = ((t)=>(t.Completed = "completed", t.Error = "error", t.Fetching = "fetching", t.Frozen = "frozen", t.Initial = "initial", t.Loading = "loading", t.Paused = "paused", t.Playing = "playing", t.Ready = "ready", t.Stopped = "stopped", t))(tn || {}), en = ((t)=>(t.Bounce = "bounce", t.Normal = "normal", t))(en || {}), q = {
    autoplay: !1,
    direction: 1,
    hover: !1,
    intermission: 0,
    loop: !1,
    playMode: "normal",
    speed: 1,
    defaultTheme: ""
}, nn = {
    activeStateId: "",
    autoplay: !1,
    currentState: "initial",
    frame: 0,
    seeker: 0,
    direction: 1,
    hover: !1,
    loop: !1,
    playMode: "normal",
    speed: 1,
    background: "transparent",
    intermission: 0,
    currentAnimationId: void 0,
    visibilityPercentage: 0
}, gn = class {
    _lottie;
    _src;
    _animationConfig;
    _prevUserPlaybackOptions = {};
    _userPlaybackOptions;
    _hover = !1;
    _loop = !1;
    _counter = 0;
    _intermission = 0;
    _counterInterval = null;
    _container = null;
    _name;
    _mode = "normal";
    _background = "transparent";
    _animation;
    _defaultTheme;
    _activeAnimationId;
    _currentAnimationId;
    _testId;
    _listeners = new Map;
    _currentState = "initial";
    _stateBeforeFreeze = "initial";
    state = new De(nn);
    _light = !1;
    _worker = !1;
    _dotLottieLoader = new Te;
    _activeStateId;
    _inInteractiveMode = !1;
    _scrollTicking = !1;
    _scrollCallback = void 0;
    _onShowIntersectionObserver = void 0;
    _visibilityPercentage = 0;
    _audios = [];
    _stateMachineManager;
    constructor(t, e, i){
        typeof t == "string" ? this._src = t : this._src = St(t), i != null && i.testId && (this._testId = i.testId), this._defaultTheme = (i == null ? void 0 : i.defaultTheme) || "", this._userPlaybackOptions = this._validatePlaybackOptions(i || {}), typeof (i == null ? void 0 : i.activeAnimationId) == "string" && (this._activeAnimationId = i.activeAnimationId), this._container = e || null, typeof (i == null ? void 0 : i.background) == "string" && this.setBackground(i.background), typeof (i == null ? void 0 : i.activeStateId) < "u" && (this._activeStateId = i.activeStateId);
        let { rendererSettings: n, ...r } = i || {};
        this._animationConfig = {
            loop: !1,
            autoplay: !1,
            renderer: "svg",
            rendererSettings: {
                clearCanvas: !0,
                progressiveLoad: !0,
                hideOnTransparent: !0,
                filterSize: {
                    width: "200%",
                    height: "200%",
                    x: "-50%",
                    y: "-50%"
                },
                ...n
            },
            ...r
        }, i != null && i.light && (this._light = i.light), i != null && i.worker && (this._worker = i.worker), this._listenToHover(), this._listenToVisibilityChange();
    }
    _listenToHover() {
        var t, e, i, n;
        let r = ()=>{
            this._hover && this.currentState !== "playing" && this.play();
        }, o = ()=>{
            this._hover && this.currentState === "playing" && this.stop();
        };
        (t = this._container) == null || t.removeEventListener("mouseenter", r), (e = this._container) == null || e.removeEventListener("mouseleave", o), (i = this._container) == null || i.addEventListener("mouseleave", o), (n = this._container) == null || n.addEventListener("mouseenter", r);
    }
    _onVisibilityChange() {
        !this._lottie || typeof document > "u" || (document.hidden && this.currentState === "playing" ? this.freeze() : this.currentState === "frozen" && this.unfreeze());
    }
    _listenToVisibilityChange() {
        typeof document < "u" && typeof document.hidden < "u" && document.addEventListener("visibilitychange", ()=>this._onVisibilityChange());
    }
    _getOption(t) {
        var e;
        if (typeof this._userPlaybackOptions[t] < "u") return this._userPlaybackOptions[t];
        let i = (e = this._dotLottieLoader.manifest) == null ? void 0 : e.animations.find((n)=>n.id === this._currentAnimationId);
        return i && typeof i[t] < "u" ? i[t] : q[t];
    }
    _getPlaybackOptions() {
        let t = {};
        for(let e in q)typeof q[e] < "u" && (t[e] = this._getOption(e));
        return t;
    }
    _setPlayerState(t) {
        var e, i, n;
        let r = t(this._getPlaybackOptions());
        try {
            qt._parse(r);
        } catch  {
            k(`Invalid PlaybackOptions, ${JSON.stringify(r, null, 2)}`);
            return;
        }
        typeof r.defaultTheme < "u" && (this._defaultTheme = r.defaultTheme), typeof r.playMode < "u" && (this._mode = r.playMode), typeof r.intermission < "u" && (this._intermission = r.intermission), typeof r.hover < "u" && (this._hover = r.hover), typeof r.loop < "u" && (this.clearCountTimer(), this._loop = r.loop, this._counter = 0, (e = this._lottie) == null || e.setLoop(typeof r.loop == "number" ? !0 : r.loop)), typeof r.speed < "u" && ((i = this._lottie) == null || i.setSpeed(r.speed)), typeof r.autoplay < "u" && this._lottie && (this._lottie.autoplay = r.autoplay), typeof r.direction < "u" && ((n = this._lottie) == null || n.setDirection(r.direction));
    }
    _getOptionsFromAnimation(t) {
        let { id: e, ...i } = t;
        return {
            ...q,
            ...i
        };
    }
    _updateTestData() {
        !this._testId || !this._lottie || (window.dotLottiePlayer || (window.dotLottiePlayer = {
            [this._testId]: {}
        }), window.dotLottiePlayer[this._testId] = {
            direction: this._lottie.playDirection,
            currentState: this._currentState,
            loop: this.loop,
            mode: this._mode,
            speed: this._lottie.playSpeed
        });
    }
    setContainer(t) {
        t !== this._container && (this._container = t, this.setBackground(this._background), this._listenToHover());
    }
    get currentState() {
        return this._currentState;
    }
    clearCountTimer() {
        this._counterInterval && clearInterval(this._counterInterval);
    }
    setCurrentState(t) {
        this._currentState = t, this._notify(), this._updateTestData();
    }
    static isPathJSON(t) {
        var e;
        return ((e = t.split(".").pop()) == null ? void 0 : e.toLowerCase()) === "json";
    }
    get src() {
        return this._src;
    }
    updateSrc(t) {
        this._src !== t && (typeof t == "string" ? this._src = t : this._src = St(t), this._activeAnimationId = void 0, this._currentAnimationId = void 0, this.load());
    }
    get intermission() {
        return this._intermission;
    }
    get hover() {
        return this._hover;
    }
    setHover(t) {
        typeof t == "boolean" && (this._hover = t, this._userPlaybackOptions.hover = t, this._notify());
    }
    setIntermission(t) {
        this._intermission = t, this._userPlaybackOptions.intermission = t, this._notify();
    }
    get mode() {
        return this._mode;
    }
    get animations() {
        return this._dotLottieLoader.animationsMap;
    }
    get themes() {
        return this._dotLottieLoader.themeMap;
    }
    setMode(t) {
        typeof t == "string" && (this._mode = t, this._userPlaybackOptions.playMode = t, this._setPlayerState(()=>({
                playMode: t
            })), this._notify(), this._updateTestData());
    }
    get container() {
        if (this._container) return this._container;
    }
    goToAndPlay(t, e, i) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("goToAndPlay() Can't use whilst loading.");
            return;
        }
        this._lottie.goToAndPlay(t, e, i), this.setCurrentState("playing");
    }
    goToAndStop(t, e, i) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("goToAndStop() Can't use whilst loading.");
            return;
        }
        this._lottie.goToAndStop(t, e, i), this.setCurrentState("stopped");
    }
    seek(t) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("seek() Can't use whilst loading.");
            return;
        }
        let e = t;
        typeof e == "number" && (e = Math.round(e));
        let i = /^(\d+)(%?)$/u.exec(e.toString());
        if (!i) return;
        let n = i[2] === "%" ? this.totalFrames * Number(i[1]) / 100 : i[1];
        n !== void 0 && (this._lottie.goToAndPlay(n, !0), this.currentState === "playing" ? this.play() : this.currentState === "frozen" ? this.freeze() : this.pause());
    }
    _areNumbersInRange(t, e) {
        return t >= 0 && t <= 1 && e >= 0 && e <= 1;
    }
    _updatePosition(t, e, i) {
        let [n, r] = t != null ? t : [
            0,
            this.totalFrames - 1
        ], [o, a] = e != null ? e : [
            0,
            1
        ];
        if (!this._areNumbersInRange(o, a)) {
            et("threshold values must be between 0 and 1");
            return;
        }
        if (this.container) {
            let { height: l, top: s } = this.container.getBoundingClientRect(), u = window.innerHeight - s, d = window.innerHeight + l, h = u / d, c = n + Math.round((h - o) / (a - o) * (r - n));
            i && i(h), this.goToAndStop(c, !0), (c >= r || h >= a) && this._handleAnimationComplete();
        }
        this._scrollTicking = !1;
    }
    _requestTick(t, e, i) {
        this._scrollTicking || (requestAnimationFrame(()=>this._updatePosition(t, e, i)), this._scrollTicking = !0);
    }
    playOnScroll(t) {
        this.stop(), this._scrollCallback && this.stopPlayOnScroll(), this._scrollCallback = ()=>this._requestTick(t == null ? void 0 : t.segments, t == null ? void 0 : t.threshold, t == null ? void 0 : t.positionCallback), window.addEventListener("scroll", this._scrollCallback);
    }
    stopPlayOnScroll() {
        this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback), this._scrollCallback = void 0);
    }
    stopPlayOnShow() {
        this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(), this._onShowIntersectionObserver = void 0);
    }
    addIntersectionObserver(t) {
        if (!this.container) throw g("Can't play on show, player container element not available.");
        let e = {
            root: null,
            rootMargin: "0px",
            threshold: t != null && t.threshold ? t.threshold : [
                0,
                1
            ]
        }, i = (n)=>{
            n.forEach((r)=>{
                var o, a;
                this._visibilityPercentage = r.intersectionRatio * 100, r.isIntersecting ? (t != null && t.callbackOnIntersect && t.callbackOnIntersect(this._visibilityPercentage), (o = this._container) == null || o.dispatchEvent(new Event("visibilityChange"))) : t != null && t.callbackOnIntersect && (t.callbackOnIntersect(0), (a = this._container) == null || a.dispatchEvent(new Event("visibilityChange")));
            });
        };
        this._onShowIntersectionObserver = new IntersectionObserver(i, e), this._onShowIntersectionObserver.observe(this.container);
    }
    playOnShow(t) {
        var e;
        if (this.stop(), !this.container) throw g("Can't play on show, player container element not available.");
        this._onShowIntersectionObserver && this.stopPlayOnShow(), this.addIntersectionObserver({
            threshold: (e = t == null ? void 0 : t.threshold) != null ? e : [],
            callbackOnIntersect: (i)=>{
                i === 0 ? this.pause() : this.play();
            }
        });
    }
    _validatePlaybackOptions(t) {
        if (!t) return {};
        let e = {};
        for (let [i, n] of Object.entries(t))switch(i){
            case "autoplay":
                typeof n == "boolean" && (e.autoplay = n);
                break;
            case "direction":
                typeof n == "number" && [
                    1,
                    -1
                ].includes(n) && (e.direction = n);
                break;
            case "loop":
                (typeof n == "boolean" || typeof n == "number") && (e.loop = n);
                break;
            case "playMode":
                typeof n == "string" && [
                    "normal",
                    "bounce"
                ].includes(n) && (e.playMode = n);
                break;
            case "speed":
                typeof n == "number" && (e.speed = n);
                break;
            case "themeColor":
                typeof n == "string" && (e.themeColor = n);
                break;
            case "hover":
                typeof n == "boolean" && (e.hover = n);
                break;
            case "intermission":
                typeof n == "number" && (e.intermission = n);
                break;
            case "defaultTheme":
                typeof n == "string" && (e.defaultTheme = n);
                break;
        }
        return this._requireValidPlaybackOptions(e), e;
    }
    _requireAnimationsInTheManifest() {
        var t;
        if (!((t = this._dotLottieLoader.manifest) != null && t.animations.length)) throw g("No animations found in manifest.");
    }
    _requireAnimationsToBeLoaded() {
        if (this._dotLottieLoader.animationsMap.size === 0) throw g("No animations have been loaded.");
    }
    async play(t, e) {
        var i, n;
        if ([
            "initial",
            "loading"
        ].includes(this._currentState)) {
            k("Player unable to play whilst loading.");
            return;
        }
        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), this._lottie && !t) {
            this._lottie.playDirection === -1 && this._lottie.currentFrame === 0 ? this._lottie.goToAndPlay(this._lottie.totalFrames, !0) : this._lottie.play(), this.setCurrentState("playing");
            return;
        }
        if (typeof t == "number") {
            let r = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations[t];
            if (!r) throw g("animation not found.");
            typeof e == "function" ? await this.render({
                id: r.id,
                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
            }) : await this.render({
                id: r.id
            });
        }
        if (typeof t == "string") {
            let r = (n = this._dotLottieLoader.manifest) == null ? void 0 : n.animations.find((o)=>o.id === t);
            if (!r) throw g("animation not found.");
            typeof e == "function" ? await this.render({
                id: r.id,
                ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
            }) : await this.render({
                id: r.id
            });
        }
    }
    playSegments(t, e) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("playSegments() Can't use whilst loading.");
            return;
        }
        this._lottie.playSegments(t, e), this.setCurrentState("playing");
    }
    resetSegments(t) {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("resetSegments() Can't use whilst loading.");
            return;
        }
        this._lottie.resetSegments(t);
    }
    togglePlay() {
        this.currentState === "playing" ? this.pause() : this.play();
    }
    _getAnimationByIdOrIndex(t) {
        var e, i;
        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), typeof t == "number") {
            let n = (e = this._dotLottieLoader.manifest) == null ? void 0 : e.animations[t];
            if (!n) throw g("animation not found.");
            return n;
        }
        if (typeof t == "string") {
            let n = (i = this._dotLottieLoader.manifest) == null ? void 0 : i.animations.find((r)=>r.id === t);
            if (!n) throw g("animation not found.");
            return n;
        }
        throw g("first param must be a number or string");
    }
    get activeAnimationId() {
        return this._getActiveAnimationId();
    }
    get currentAnimationId() {
        return this._currentAnimationId;
    }
    get activeStateId() {
        return this._activeStateId;
    }
    async _startInteractivity(t) {
        if (!this._inInteractiveMode) {
            et("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
            return;
        }
        if (this._dotLottieLoader.stateMachinesMap.size === 0 && await this._dotLottieLoader.getStateMachines(), this._dotLottieLoader.stateMachinesMap.size === 0) throw g("No interactivity states are available.");
        if (t === "undefined") throw g("stateId is not specified.");
        this._stateMachineManager || (this._stateMachineManager = await Ue(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)), this._stateMachineManager.start(t);
    }
    enterInteractiveMode(t) {
        var e;
        if (t) this._inInteractiveMode || (this._prevUserPlaybackOptions = {
            ...this._userPlaybackOptions
        }), this._inInteractiveMode && ((e = this._stateMachineManager) == null || e.stop()), this._activeStateId = t, this._inInteractiveMode = !0, this._startInteractivity(t);
        else throw g("stateId must be a non-empty string.");
    }
    exitInteractiveMode() {
        var t;
        this._inInteractiveMode && (this._inInteractiveMode = !1, this._activeStateId = "", (t = this._stateMachineManager) == null || t.stop(), this._userPlaybackOptions = {}, this._userPlaybackOptions = {
            ...this._prevUserPlaybackOptions
        }, this._prevUserPlaybackOptions = {}, this.reset());
    }
    reset() {
        var t;
        let e = this._getActiveAnimationId(), i = (t = this._dotLottieLoader.manifest) == null ? void 0 : t.animations.find((n)=>n.id === e);
        if (this._inInteractiveMode && this.exitInteractiveMode(), !i) throw g("animation not found.");
        this.play(e);
    }
    previous(t) {
        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw g("manifest not found.");
        if (this._inInteractiveMode) {
            k("previous() is not supported in interactive mode.");
            return;
        }
        let e = this._dotLottieLoader.manifest.animations.findIndex((n)=>n.id === this._currentAnimationId);
        if (e === -1) throw g("animation not found.");
        let i = this._dotLottieLoader.manifest.animations[(e - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
        if (!i || !i.id) throw g("animation not found.");
        typeof t == "function" ? this.render({
            id: i.id,
            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
        }) : this.render({
            id: i.id
        });
    }
    next(t) {
        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw g("manifest not found.");
        if (this._inInteractiveMode) {
            k("next() is not supported in interactive mode.");
            return;
        }
        let e = this._dotLottieLoader.manifest.animations.findIndex((n)=>n.id === this._currentAnimationId);
        if (e === -1) throw g("animation not found.");
        let i = this._dotLottieLoader.manifest.animations[(e + 1) % this._dotLottieLoader.manifest.animations.length];
        if (!i || !i.id) throw g("animation not found.");
        typeof t == "function" ? this.render({
            id: i.id,
            ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
        }) : this.render({
            id: i.id
        });
    }
    getManifest() {
        return this._dotLottieLoader.manifest;
    }
    resize() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("resize() Can't use whilst loading.");
            return;
        }
        this._lottie.resize();
    }
    stop() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("stop() Can't use whilst loading.");
            return;
        }
        this.clearCountTimer(), this._counter = 0, this._setPlayerState(()=>({
                direction: this._getOption("direction")
            })), this._lottie.stop(), this.setCurrentState("stopped");
    }
    pause() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("pause() Can't use whilst loading.");
            return;
        }
        this.clearCountTimer(), this._lottie.pause(), this.setCurrentState("paused");
    }
    freeze() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("freeze() Can't use whilst loading.");
            return;
        }
        this.currentState !== "frozen" && (this._stateBeforeFreeze = this.currentState), this._lottie.pause(), this.setCurrentState("frozen");
    }
    unfreeze() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("unfreeze() Can't use whilst loading.");
            return;
        }
        this._stateBeforeFreeze === "playing" ? this.play() : this.pause();
    }
    destroy() {
        var t, e;
        (t = this._container) != null && t.__lottie && (this._container.__lottie.destroy(), this._container.__lottie = null), this._audios.length && (this._audios.forEach((i)=>{
            i.unload();
        }), this._audios = []), this.clearCountTimer(), typeof document < "u" && document.removeEventListener("visibilitychange", ()=>this._onVisibilityChange()), this._counter = 0, (e = this._lottie) == null || e.destroy(), this._lottie = void 0;
    }
    getAnimationInstance() {
        return this._lottie;
    }
    static getLottieWebVersion() {
        return `${Yi.dependencies["lottie-web"]}`;
    }
    addEventListener(t, e) {
        var i, n, r;
        this._listeners.has(t) || this._listeners.set(t, new Set), (i = this._listeners.get(t)) == null || i.add(e);
        try {
            t === "complete" ? (n = this._container) == null || n.addEventListener(t, e) : (r = this._lottie) == null || r.addEventListener(t, e);
        } catch (o) {
            et(`addEventListener ${o}`);
        }
    }
    getState() {
        var t, e, i, n, r, o, a;
        return {
            autoplay: (e = (t = this._lottie) == null ? void 0 : t.autoplay) != null ? e : !1,
            currentState: this._currentState,
            frame: this._frame,
            visibilityPercentage: this._visibilityPercentage,
            seeker: this._seeker,
            direction: (n = (i = this._lottie) == null ? void 0 : i.playDirection) != null ? n : 1,
            hover: this._hover,
            loop: this._loop || !1,
            playMode: this._mode,
            speed: (o = (r = this._lottie) == null ? void 0 : r.playSpeed) != null ? o : 1,
            background: this._background,
            intermission: this._intermission,
            defaultTheme: this._defaultTheme,
            currentAnimationId: this._currentAnimationId,
            activeStateId: (a = this._activeStateId) != null ? a : ""
        };
    }
    _notify() {
        this.state.setState(this.getState());
    }
    get totalFrames() {
        var t;
        return ((t = this._lottie) == null ? void 0 : t.totalFrames) || 0;
    }
    get direction() {
        return this._lottie ? this._lottie.playDirection : 1;
    }
    setDirection(t) {
        this._requireValidDirection(t), this._setPlayerState(()=>({
                direction: t
            })), this._userPlaybackOptions.direction = t;
    }
    get speed() {
        var t;
        return ((t = this._lottie) == null ? void 0 : t.playSpeed) || 1;
    }
    setSpeed(t) {
        this._requireValidSpeed(t), this._setPlayerState(()=>({
                speed: t
            })), this._userPlaybackOptions.speed = t;
    }
    get autoplay() {
        var t, e;
        return (e = (t = this._lottie) == null ? void 0 : t.autoplay) != null ? e : !1;
    }
    setAutoplay(t) {
        if (this._requireValidAutoplay(t), !this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("setAutoplay() Can't use whilst loading.");
            return;
        }
        this._setPlayerState(()=>({
                autoplay: t
            })), this._userPlaybackOptions.autoplay = t;
    }
    toggleAutoplay() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("toggleAutoplay() Can't use whilst loading.");
            return;
        }
        this.setAutoplay(!this._lottie.autoplay);
    }
    get defaultTheme() {
        return this._defaultTheme;
    }
    setDefaultTheme(t) {
        this._setPlayerState(()=>({
                defaultTheme: t
            })), this._userPlaybackOptions.defaultTheme = t, this._animation && this.render();
    }
    get loop() {
        return this._loop;
    }
    setLoop(t) {
        this._requireValidLoop(t), this._setPlayerState(()=>({
                loop: t
            })), this._userPlaybackOptions.loop = t;
    }
    toggleLoop() {
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("toggleLoop() Can't use whilst loading.");
            return;
        }
        this.setLoop(!this._loop);
    }
    get background() {
        return this._background;
    }
    setBackground(t) {
        this._requireValidBackground(t), this._background = t, this._container && (this._container.style.backgroundColor = t);
    }
    get _frame() {
        return this._lottie ? this.currentState === "completed" ? this.direction === -1 ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0;
    }
    get _seeker() {
        return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0;
    }
    async revertToManifestValues(t) {
        var e;
        let i;
        !Array.isArray(t) || t.length === 0 ? i = [
            "autoplay",
            "defaultTheme",
            "direction",
            "hover",
            "intermission",
            "loop",
            "playMode",
            "speed",
            "activeAnimationId"
        ] : i = t;
        let n = !1;
        if (i.includes("activeAnimationId")) {
            let r = (e = this._dotLottieLoader.manifest) == null ? void 0 : e.activeAnimationId, o = this._getAnimationByIdOrIndex(r || 0);
            this._activeAnimationId = r, await this._setCurrentAnimation(o.id), n = !0;
        }
        i.forEach((r)=>{
            switch(r){
                case "autoplay":
                    delete this._userPlaybackOptions.autoplay, this.setAutoplay(this._getOption("autoplay"));
                    break;
                case "defaultTheme":
                    delete this._userPlaybackOptions.defaultTheme, this.setDefaultTheme(this._getOption("defaultTheme"));
                    break;
                case "direction":
                    delete this._userPlaybackOptions.direction, this.setDirection(this._getOption("direction"));
                    break;
                case "hover":
                    delete this._userPlaybackOptions.hover, this.setHover(this._getOption("hover"));
                    break;
                case "intermission":
                    delete this._userPlaybackOptions.intermission, this.setIntermission(this._getOption("intermission"));
                    break;
                case "loop":
                    delete this._userPlaybackOptions.loop, this.setLoop(this._getOption("loop"));
                    break;
                case "playMode":
                    delete this._userPlaybackOptions.playMode, this.setMode(this._getOption("playMode")), this.setDirection(this._getOption("direction"));
                    break;
                case "speed":
                    delete this._userPlaybackOptions.speed, this.setSpeed(this._getOption("speed"));
                    break;
            }
        }), n && this.render();
    }
    removeEventListener(t, e) {
        var i, n, r;
        try {
            t === "complete" ? (i = this._container) == null || i.removeEventListener(t, e) : (n = this._lottie) == null || n.removeEventListener(t, e), (r = this._listeners.get(t)) == null || r.delete(e);
        } catch (o) {
            et("removeEventListener", o);
        }
    }
    _handleAnimationComplete() {
        var t;
        typeof this._loop == "number" && this.stop();
        let e = this.direction === -1 ? 0 : this.totalFrames - 1;
        this.goToAndStop(e, !0), this._counter = 0, this.clearCountTimer(), this.setCurrentState("completed"), (t = this._container) == null || t.dispatchEvent(new Event("complete"));
    }
    addEventListeners() {
        var t;
        if (!this._lottie || [
            "loading"
        ].includes(this._currentState)) {
            k("addEventListeners() Can't use whilst loading.");
            return;
        }
        this._lottie.addEventListener("enterFrame", ()=>{
            var e;
            if (!this._lottie) {
                k("enterFrame event : Lottie is undefined.");
                return;
            }
            Math.floor(this._lottie.currentFrame) === 0 && this.direction === -1 && ((e = this._container) == null || e.dispatchEvent(new Event("complete")), this.loop || this.setCurrentState("completed")), this._notify();
        }), this._lottie.addEventListener("loopComplete", ()=>{
            var e;
            if (!this._lottie) {
                k("loopComplete event : Lottie is undefined.");
                return;
            }
            (e = this._container) == null || e.dispatchEvent(new Event("loopComplete")), this.intermission > 0 && this.pause();
            let i = this._lottie.playDirection;
            if (typeof this._loop == "number" && this._loop > 0 && (this._counter += this._mode === "bounce" ? .5 : 1, this._counter >= this._loop)) {
                this._handleAnimationComplete();
                return;
            }
            this._mode === "bounce" && typeof i == "number" && (i = Number(i) * -1);
            let n = i === -1 ? this._lottie.totalFrames - 1 : 0;
            this.intermission ? (this.goToAndPlay(n, !0), this.pause(), this._counterInterval = window.setTimeout(()=>{
                this._lottie && (this._setPlayerState(()=>({
                        direction: i
                    })), this.goToAndPlay(n, !0));
            }, this._intermission)) : (this._setPlayerState(()=>({
                    direction: i
                })), this.goToAndPlay(i === -1 ? this.totalFrames - 1 : 0, !0));
        }), this._lottie.addEventListener("complete", ()=>{
            if (this._lottie && this._loop === !1 && this._mode === "bounce") {
                if (this._counter += .5, this._counter >= 1) {
                    this._handleAnimationComplete();
                    return;
                }
                this._counterInterval = window.setTimeout(()=>{
                    if (!this._lottie) return;
                    let e = this._lottie.playDirection;
                    this._mode === "bounce" && typeof e == "number" && (e = Number(e) * -1);
                    let i = e === -1 ? this.totalFrames - 1 : 0;
                    this._setPlayerState(()=>({
                            direction: e
                        })), this.goToAndPlay(i, !0);
                }, this._intermission);
            } else this._handleAnimationComplete();
        });
        for (let [e, i] of this._listeners)if (e === "complete") for (let n of i)(t = this._container) == null || t.addEventListener(e, n);
        else for (let n of i)this._lottie.addEventListener(e, n);
    }
    async _setCurrentAnimation(t) {
        this._currentState = "loading";
        let e = await this._dotLottieLoader.getAnimation(t);
        this._currentAnimationId = t, this._animation = e, this._currentState = "ready";
    }
    async _getAudioFactory() {
        if (this._animation && Ce(this._animation)) {
            let { DotLottieAudio: t } = await require("e776ffb504b29b83");
            return (e)=>{
                let i = new t({
                    src: [
                        e
                    ]
                });
                return this._audios.push(i), i;
            };
        }
        return null;
    }
    async render(t) {
        var e, i, n, r, o, a, l, s, u, d, h, c, p, m, f, v, _, S;
        if (t != null && t.id) await this._setCurrentAnimation(t.id);
        else if (!this._animation) throw g("no animation selected");
        let y = (e = q.loop) != null ? e : !1, A = (i = q.autoplay) != null ? i : !1, P = (n = q.playMode) != null ? n : "normal", N = (r = q.intermission) != null ? r : 0, O = (o = q.hover) != null ? o : !1, I = (a = q.direction) != null ? a : 1, T = (l = q.speed) != null ? l : 1, B = (s = q.defaultTheme) != null ? s : "";
        y = (u = t == null ? void 0 : t.loop) != null ? u : this._getOption("loop"), A = (d = t == null ? void 0 : t.autoplay) != null ? d : this._getOption("autoplay"), P = (h = t == null ? void 0 : t.playMode) != null ? h : this._getOption("playMode"), N = (c = t == null ? void 0 : t.intermission) != null ? c : this._getOption("intermission"), O = (p = t == null ? void 0 : t.hover) != null ? p : this._getOption("hover"), I = (m = t == null ? void 0 : t.direction) != null ? m : this._getOption("direction"), T = (f = t == null ? void 0 : t.speed) != null ? f : this._getOption("speed"), B = (v = t == null ? void 0 : t.defaultTheme) != null ? v : this._getOption("defaultTheme");
        let C = {
            ...this._animationConfig,
            autoplay: O ? !1 : A,
            loop: typeof y == "number" ? !0 : y,
            renderer: this._worker ? "svg" : (_ = this._animationConfig.renderer) != null ? _ : "svg"
        }, [z, j, U] = await Promise.all([
            this._dotLottieLoader.getTheme(B),
            this._getLottiePlayerInstance(),
            this._getAudioFactory()
        ]);
        if (z && this._animation ? (this._animation = St(this._animation), this._animation.slots = z) : this._animation = await this._dotLottieLoader.getAnimation((S = this._currentAnimationId) != null ? S : ""), this._activeStateId && !this._inInteractiveMode) {
            this.enterInteractiveMode(this._activeStateId);
            return;
        }
        this.destroy(), this._setPlayerState(()=>({
                defaultTheme: B,
                playMode: P,
                intermission: N,
                hover: O,
                loop: y
            })), U ? this._lottie = j.loadAnimation({
            ...C,
            container: this._container,
            animationData: this._animation,
            audioFactory: U
        }) : this._lottie = j.loadAnimation({
            ...C,
            container: this._container,
            animationData: this._animation
        }), typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = ()=>{
            var E;
            (E = this._lottie) == null || E.playSegments([
                0,
                this._lottie.totalFrames
            ], !0);
        }), this.addEventListeners(), this._container && (this._container.__lottie = this._lottie), this._setPlayerState(()=>({
                direction: I,
                speed: T
            })), A && !O && (y === !1 && I === -1 ? this.play() : this.setCurrentState("playing")), this._updateTestData();
    }
    async _getLottiePlayerInstance() {
        var t;
        let e = (t = this._animationConfig.renderer) != null ? t : "svg", i;
        if (this._worker) return e !== "svg" && k("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."), i = await require("75cb0319e941bd78"), i.default;
        switch(e){
            case "svg":
                this._light ? i = await require("419b35d8c2984467") : i = await require("92e361b3aa0a87fd");
                break;
            case "canvas":
                this._light ? i = await require("4ac82d7f2fa4f8a1") : i = await require("d1f63ac4da5c81ed");
                break;
            case "html":
                this._light ? i = await require("1160fb86282aa145") : i = await require("641fd7163202fa0e");
                break;
            default:
                throw new Error(`Invalid renderer: ${e}`);
        }
        return i.default;
    }
    _getActiveAnimationId() {
        var t, e, i, n;
        let r = this._dotLottieLoader.manifest;
        return (n = (i = (t = this._activeAnimationId) != null ? t : r == null ? void 0 : r.activeAnimationId) != null ? i : (e = r == null ? void 0 : r.animations[0]) == null ? void 0 : e.id) != null ? n : void 0;
    }
    async load(t) {
        if (this._currentState === "loading") {
            k("Loading in progress..");
            return;
        }
        try {
            if (this.setCurrentState("loading"), typeof this._src == "string") {
                if (Ee(this._src)) {
                    let i = JSON.parse(this._src);
                    this._dotLottieLoader.loadFromLottieJSON(i);
                } else {
                    let i = new URL(this._src, window.location.href);
                    await this._dotLottieLoader.loadFromUrl(i.toString());
                }
            } else if (typeof this._src == "object" && at(this._src)) this._dotLottieLoader.loadFromLottieJSON(this._src);
            else throw g("Invalid src provided");
            if (!this._dotLottieLoader.manifest) throw g("No manifest found");
            let e = this._getActiveAnimationId();
            if (!e) throw g("No active animation found");
            await this._setCurrentAnimation(e), await this.render(t);
        } catch (e) {
            this.setCurrentState("error"), e instanceof Error && et(`Error loading animation: ${e.message}`);
        }
    }
    setErrorState(t) {
        this.setCurrentState("error"), et(t);
    }
    _requireValidDirection(t) {
        if (t !== -1 && t !== 1) throw g("Direction can only be -1 (backwards) or 1 (forwards)");
    }
    _requireValidIntermission(t) {
        if (t < 0 || !Number.isInteger(t)) throw g("intermission must be a positive number");
    }
    _requireValidLoop(t) {
        if (typeof t == "number" && (!Number.isInteger(t) || t < 0)) throw g("loop must be a positive number or boolean");
    }
    _requireValidSpeed(t) {
        if (typeof t != "number") throw g("speed must be a number");
    }
    _requireValidBackground(t) {
        if (typeof t != "string") throw g("background must be a string");
    }
    _requireValidAutoplay(t) {
        if (typeof t != "boolean") throw g("autoplay must be a boolean");
    }
    _requireValidPlaybackOptions(t) {
        t.direction && this._requireValidDirection(t.direction), t.intermission && this._requireValidIntermission(t.intermission), t.loop && this._requireValidLoop(t.loop), t.speed && this._requireValidSpeed(t.speed);
    }
};

},{"f1eb749541984fbe":"fCgem","95c48ace31f48df3":"9wsKl","e776ffb504b29b83":"iMCSm","75cb0319e941bd78":"d1pbE","419b35d8c2984467":"f0kt9","92e361b3aa0a87fd":"c494r","4ac82d7f2fa4f8a1":"czoqM","d1f63ac4da5c81ed":"5V2Ew","1160fb86282aa145":"dvnH5","641fd7163202fa0e":"fVhgP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wsKl":[function(require,module,exports) {
module.exports = require("7e90e91d083f8ed1")(require("b6464ea09ee19c95").getBundleURL("eYxzE") + "dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR.822cea8e.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("4OkIX"));

},{"7e90e91d083f8ed1":"61B45","b6464ea09ee19c95":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iMCSm":[function(require,module,exports) {
module.exports = require("c642cf1cbfaa772b")(require("3f3956f2d6f964ce").getBundleURL("eYxzE") + "dotlottie-audio-75C54RUV.e0a1525c.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("5MQ98"));

},{"c642cf1cbfaa772b":"61B45","3f3956f2d6f964ce":"lgJ39"}],"d1pbE":[function(require,module,exports) {
module.exports = require("761ddff48f814cf")(require("f35bd45150716203").getBundleURL("eYxzE") + "lottie_worker-Q23FJ6ZR-YP5OKMTN.db9c1655.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("gDD4W"));

},{"761ddff48f814cf":"61B45","f35bd45150716203":"lgJ39"}],"f0kt9":[function(require,module,exports) {
module.exports = require("bd1b3513c858c1dd")(require("5ffa263255c270d1").getBundleURL("eYxzE") + "lottie_light-KMJEUZFY-TNG7ODX7.ee1e49c9.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("9928f"));

},{"bd1b3513c858c1dd":"61B45","5ffa263255c270d1":"lgJ39"}],"c494r":[function(require,module,exports) {
module.exports = require("3d0ff36aa75a45e7")(require("a36b2f7da4833402").getBundleURL("eYxzE") + "lottie_svg-MJGYILXD-NRTSROOT.a2ed2711.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("6JTyB"));

},{"3d0ff36aa75a45e7":"61B45","a36b2f7da4833402":"lgJ39"}],"czoqM":[function(require,module,exports) {
module.exports = require("420f8488c55590c2")(require("2816bdc969f891fd").getBundleURL("eYxzE") + "lottie_light_canvas-B5UTTNXA-PRI6IBWW.a57d9e99.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("1mOjS"));

},{"420f8488c55590c2":"61B45","2816bdc969f891fd":"lgJ39"}],"5V2Ew":[function(require,module,exports) {
module.exports = require("8b27c175c1fe151e")(require("e101ca98dab62bc7").getBundleURL("eYxzE") + "lottie_canvas-CDSUBMCL-MZNYH5VV.db226f2c.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("l9YoP"));

},{"8b27c175c1fe151e":"61B45","e101ca98dab62bc7":"lgJ39"}],"dvnH5":[function(require,module,exports) {
module.exports = require("4f05b5e482c31063")(require("4b151d4e6cbcc086").getBundleURL("eYxzE") + "lottie_light_html-SLCECTRT-SYWXEBDN.f8c425b8.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("fopqj"));

},{"4f05b5e482c31063":"61B45","4b151d4e6cbcc086":"lgJ39"}],"fVhgP":[function(require,module,exports) {
module.exports = require("68d73f53401699bc")(require("f11066c2dbb79407").getBundleURL("eYxzE") + "lottie_html-X3TYKVQI-L6774NQS.d05fc75c.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("Rkjxe"));

},{"68d73f53401699bc":"61B45","f11066c2dbb79407":"lgJ39"}],"2Aqr0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>u) //# sourceMappingURL=out.js.map
;
parcelHelpers.export(exports, "b", ()=>v);
var l = Object.create, a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, O = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, u = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports), s = (r, e, t, p)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let o of f(e))!c.call(r, o) && o !== t && a(r, o, {
        get: ()=>e[o],
        enumerable: !(p = n(e, o)) || p.enumerable
    });
    return r;
}, v = (r, e, t)=>(t = r != null ? l(O(r)) : {}, s(e || !r || !r.__esModule ? a(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jX5B9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>j) //# sourceMappingURL=out.js.map
;
var h = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = (g, b, d, c)=>{
    for(var a = c > 1 ? void 0 : c ? i(b, d) : b, e = g.length - 1, f; e >= 0; e--)(f = g[e]) && (a = (c ? f(b, d, a) : f(a)) || a);
    return c && a && h(b, d, a), a;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["isici","kT7zd"], "kT7zd", "parcelRequire94c2")

//# sourceMappingURL=index.049e6ef1.js.map
