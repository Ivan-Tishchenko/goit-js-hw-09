!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var a=r("6JpON");var i=document.querySelector("form"),l=null;i.addEventListener("submit",(function(n){n.preventDefault();var o=Number.parseFloat(document.querySelector("[name=delay]").value),t=Number.parseFloat(document.querySelector("[name=step]").value),r=Number.parseFloat(document.querySelector("[name=amount]").value),i=1;l=setInterval((function(){var n,u;(n=i,u=o,new Promise((function(e,o){Math.random()>.3?e({position:n,delay:u}):o({position:n,delay:u})}))).then((function(n){var o=n.position,t=n.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(a).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t,(i+=1)>r&&clearInterval(l)}),t)}))}();
//# sourceMappingURL=03-promises.bf1971db.js.map