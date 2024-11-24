import{A as k,a as g,S as q}from"./assets/vendor-BcuOPxRX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const E=document.querySelector(".hamburger-menu-button"),y=document.querySelector(".mobile-menu"),x=document.querySelector(".mobile-menu__close"),I=document.querySelectorAll(".js-menu__link");E.addEventListener("click",()=>{y.classList.add("active"),document.body.classList.add("no-scroll")});x.addEventListener("click",()=>{y.classList.remove("active"),document.body.classList.remove("no-scroll")});I.forEach(e=>{e.addEventListener("click",()=>{y.classList.remove("active"),e.getAttribute("href").substring(1)})});function C(e,t){try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.log(s)}}function B(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.log(t)}}const L=document.querySelector("#switch"),M=document.querySelector("#theme-link"),w="theme";S();L.addEventListener("click",O);function S(){const e=B(w);M.href=e==="dark"?"./css/dark-theme.css":"",L.checked=e==="dark"}function O(e){C(w,e.target.checked?"dark":""),S()}const m=document.querySelectorAll(".li-class-project"),b=document.getElementById("loadMore"),h=3;let l=3;b.addEventListener("click",P);function P(){for(let e=l;e<l+h&&e<m.length;e++)m[e].classList.remove("hidden");l+=h,l>=m.length&&(b.style.display="none")}new k(".accordion",{elementClass:"accordion-item",triggerClass:"accordion-subtitle",panelClass:"accordion-body",activeClass:"active",openOnInit:[0]});const A="https://portfolio-js.b.goit.study/api/reviews",a=document.querySelector(".left-arrow"),f=document.querySelector(".right-arrow");g.get(A).then(function(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML=N(e.data);const s=new q(".reviews-swiper",{direction:"horizontal",loop:!1,autoHeight:!0,slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}},on:{slideChange:r=>{r.isEnd?(f.disabled=!0,a.disabled=!1):r.isBeginning?a.disabled=!0:(f.disabled=!1,a.disabled=!1)}}});f.addEventListener("click",()=>{s.slideNext()}),a.addEventListener("click",()=>{s.slidePrev()})}).catch(function(e){console.log(e)}).finally(function(){});function N(e){return e.map(({author:t,avatar_url:s,review:r})=>`<div class="swiper-slide">
           <div class="reviews-text">
           ${r}
              <div class="autor-style">
              <img class="reviews-photo" src="${s}" alt="Photo" width="40">
              <h4 class="reviews-subtitle">${t}</h4>
              </div>
           </div>
        </div>`).join("")}const d=document.querySelector(".backdrop"),T=document.querySelector(".modal-close-btn");function j(){document.body.style.overflow="hidden",d.classList.add("is-open")}function v(){document.body.style.overflow="",d.classList.remove("is-open")}T.addEventListener("click",v);d.addEventListener("click",e=>{e.target===d&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});const _=document.querySelector(".work-form"),c=document.querySelector("#user-email"),p=document.querySelector("#user-message"),i=document.querySelector(".work-form-text");_.addEventListener("submit",async e=>{e.preventDefault();const t=c.value,s=p.value;try{if((await g.post("https://portfolio-js.b.goit.study/api-docs",{email:t,message:s})).status!==200){i.textContent="Invalid email, try again",i.classList.remove("visually-hidden");return}c.value="",p.value="",document.querySelector(".work-form-icon").classList.add("visually-hidden"),j()}catch{i.textContent="Something went wrong. Please check your inputs.",i.classList.remove("visually-hidden")}});c.addEventListener("input",()=>{const e=c.checkValidity();document.querySelector(".work-form-icon").classList.toggle("visually-hidden",!e),e?(i.classList.add("visually-hidden"),c.classList.remove("invalid-text")):(i.textContent="Invalid email, try again",i.classList.remove("visually-hidden"),c.classList.add("invalid-text"))});
//# sourceMappingURL=index.js.map