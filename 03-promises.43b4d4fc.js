function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var l=r("7Y9D8");const a=document.querySelector("form");let i=null;a.addEventListener("submit",(function(t){t.preventDefault();let o=Number.parseFloat(document.querySelector("[name=delay]").value),n=Number.parseFloat(document.querySelector("[name=step]").value),r=Number.parseFloat(document.querySelector("[name=amount]").value),a=1;i=setInterval((()=>{var t,u;(t=a,u=o,new Promise(((e,o)=>{Math.random()>.3?e({position:t,delay:u}):o({position:t,delay:u})}))).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),a+=1,o+=n,a>r&&clearInterval(i)}),n)}));
//# sourceMappingURL=03-promises.43b4d4fc.js.map
