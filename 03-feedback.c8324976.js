!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a.default(e,t,n[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var l,f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,y=m||b||Function("return this")(),O=Object.prototype.toString,j=Math.max,w=Math.min,h=function(){return y.Date.now()};function x(e,t,n){var r,o,i,u,a,l,f=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function p(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function g(e){return f=e,a=setTimeout(b,t),s?p(e):u}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-f>=i}function b(){var e=h();if(m(e))return y(e);a=setTimeout(b,function(e){var n=t-(e-l);return d?w(n,i-(e-f)):n}(e))}function y(e){return a=void 0,v&&r?p(e):(r=o=void 0,u)}function O(){var e=h(),n=m(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return g(l);if(d)return a=setTimeout(b,t),p(l)}return void 0===a&&(a=setTimeout(b,t)),u}return t=_(t)||0,S(n)&&(s=!!n.leading,i=(d="maxWait"in n)?j(_(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=l=o=a=void 0},O.flush=function(){return void 0===a?u:y(h())},O}function S(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(S(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=S(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=v.test(t);return r||p.test(t)?g(t.slice(2),r?2:8):d.test(t)?NaN:+t}l=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),x(e,t,{leading:r,maxWait:t,trailing:o})},console.log(e(l));var T="feedback-form-state",E={},M=document.querySelector(".feedback-form"),N=document.querySelector('[name="email"]');console.log(N);var D=document.querySelector('[name="message"]');console.log(D),M.addEventListener("input",e(l)((function(e){E[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(E))}),500)),M.addEventListener("submit",(function(e){console.log(e),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T),console.log(E)})),function(){var t=JSON.parse(localStorage.getItem(T));console.log(t),t&&(N.value=t.email,D.value=t.message,console.log(N.value),console.log(D.value));E=e(i)({},E,{email:N.value,message:D.value})}()}();
//# sourceMappingURL=03-feedback.c8324976.js.map
