import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as r}from"./assets/vendor-1e54b975.js";const n="feedback-form-state",a=document.querySelector(".feedback-form"),o=a.querySelector('input[name="email"]'),m=a.querySelector('textarea[name="message"]');l();a.addEventListener("input",r(s,500));a.addEventListener("submit",function(e){e.preventDefault();const t={email:o.value,message:m.value};console.log(t),c()});function s(){const e={email:o.value,message:m.value};localStorage.setItem(n,JSON.stringify(e))}function l(){const e=localStorage.getItem(n);if(e){const t=JSON.parse(e);o.value=t.email||"",m.value=t.message||""}}function c(){localStorage.removeItem(n),o.value="",m.value=""}
//# sourceMappingURL=commonHelpers3.js.map