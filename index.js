import{A as v,a as g}from"./assets/vendor-D2KXaFiq.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const u=document.querySelectorAll(".li-class-project"),p=document.getElementById("loadMore"),f=3;let c=3;p.addEventListener("click",h);function h(){for(let t=c;t<c+f&&t<u.length;t++)u[t].classList.remove("hidden");c+=f,c>=u.length&&(p.style.display="none")}new v(".accordion",{elementClass:"accordion-item",triggerClass:"accordion-subtitle",panelClass:"accordion-body",activeClass:"active",openOnInit:[0]});const l=document.querySelector(".backdrop"),L=document.querySelector(".modal-close-btn");function w(){document.body.style.overflow="hidden",l.classList.add("is-open")}function m(){document.body.style.overflow="",l.classList.remove("is-open")}L.addEventListener("click",m);l.addEventListener("click",t=>{t.target===l&&m()});document.addEventListener("keydown",t=>{t.key==="Escape"&&m()});const b=document.querySelector(".work-form"),r=document.querySelector("#user-email"),y=document.querySelector("#user-message"),s=document.querySelector(".work-form-text");b.addEventListener("submit",async t=>{t.preventDefault();const n=r.value,a=y.value;try{if((await g.post("https://portfolio-js.b.goit.study/api-docs",{email:n,message:a})).status!==200){s.textContent="Invalid email, try again",s.classList.remove("visually-hidden");return}r.value="",y.value="",document.querySelector(".work-form-icon").classList.add("visually-hidden"),w()}catch{s.textContent="Something went wrong. Please check your inputs.",s.classList.remove("visually-hidden")}});r.addEventListener("input",()=>{const t=r.checkValidity();document.querySelector(".work-form-icon").classList.toggle("visually-hidden",!t),t?(s.classList.add("visually-hidden"),r.classList.remove("invalid-text")):(s.textContent="Invalid email, try again",s.classList.remove("visually-hidden"),r.classList.add("invalid-text"))});
//# sourceMappingURL=index.js.map
