import{A as p,a as I,S as A}from"./assets/vendor-BcuOPxRX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();const Y=document.querySelector(".hamburger-menu-button"),C=document.querySelector(".mobile-menu"),X=document.querySelector(".mobile-menu__close"),k=document.querySelectorAll(".js-menu__link");Y.addEventListener("click",()=>{C.classList.add("active"),document.body.classList.add("no-scroll")});X.addEventListener("click",()=>{C.classList.remove("active"),document.body.classList.remove("no-scroll")});k.forEach(e=>{e.addEventListener("click",()=>{C.classList.remove("active"),e.getAttribute("href").substring(1),document.body.classList.remove("no-scroll")})});function V(e,t){try{const i=JSON.stringify(t);localStorage.setItem(e,i)}catch(i){console.log(i)}}function w(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.log(t)}}const y=document.querySelector("#switch"),L="theme";y.addEventListener("click",f);J();const G=document.querySelector("#theme-link");function v(){const e=w(L);G.href=e==="dark"?new URL("data:text/css;base64,OnJvb3QgewogIC0tdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpOwogIC0tYWNjZW50LWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4tZHQpOwogIC0tbWFpbi1iYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay1kdCk7CiAgLS1zZWNvbmQtYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWdyZWVuLWR0KTsKICAtLXRoaXJkLWJhY2tncm91bmQ6IHZhcigtLWNoYXJjb2FsLWR0KTsKICAtLWJ0bi1oZXJvLWJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWdyZWVuKTsKICAtLWJ0bi1oZXJvLWhvdmVyOiB2YXIoLS1hY2NlbnQtZ3JlZW4tZHQpOwogIC0tc2Vjb25kLWhvdmVyOiB2YXIoLS1ob3Zlci1ncmVlbi1kdCk7CiAgLS10aGlyZC1ob3ZlcjogdmFyKC0taG92ZXItZ3JleS1kdCk7CiAgLS1maWxsLWljb246IHZhcigtLWFjY2VudC1ncmVlbi1kdCk7CiAgLS1pY29uLWJhY2tncm91bmQ6IHZhcigtLWRhcmstYWNjZW50LWR0KTsKICAtLWJvcmRlci1mb290ZXI6IHZhcigtLXdoaXRlKTsKICAtLXN3aXRjaC1iYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7CiAgLS1zd2l0Y2gtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbik7CiAgLS1hY2NvcmRlb24tYmFja2dyb3VuZDogdmFyKC0tZGFyay1hY2NlbnQtZHQpOwogIC0tdGVjaC1za2lsbHMtYmFja2dyb3VuZDogdmFyKC0tZGFyay1hY2NlbnQtZHQpOwogIC0tdGVjaC1za2lsbHMtY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbi1kdCk7CiAgLS1wb2ludC10ZWNoLXNraWxsOiB2YXIoLS1hY2NlbnQtZ3JlZW4tZHQpOwp9Ci5oZXJvLWNvbnRhaW5lciB7CiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWcvZGVjb3ItZGFyay9kZWNvcl9oZXJvX21vYmlsZS5wbmcpOwp9CgpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksCiAgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksCiAgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgewogIC5oZXJvLWNvbnRhaW5lciB7CiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltZy9kZWNvci1kYXJrL2RlY29yX2hlcm9fbW9iaWxlQDJ4LnBuZyk7CiAgfQp9CgpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgewogIC5oZXJvLWNvbnRhaW5lciB7CiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltZy9kZWNvci1kYXJrL2RlY29yX2hlcm9fdGFibGV0LnBuZyk7CiAgfQoKICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksCiAgICAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwKICAgIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHsKICAgIC5oZXJvLWNvbnRhaW5lciB7CiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1nL2RlY29yLWRhcmsvZGVjb3JfaGVyb190YWJsZXRAMngucG5nKTsKICAgIH0KICB9CiAgLndvcmstdG9nZXRoZXItY29udGFpbmVyIHsKICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1nL2RlY29yLWRhcmsvZGVjb3Jfd29ya190YWJsZXQucG5nKTsKICB9CgogIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLAogICAgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCksCiAgICAobWluLXJlc29sdXRpb246IDE5MmRwaSkgewogICAgLndvcmstdG9nZXRoZXItY29udGFpbmVyIHsKICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWcvZGVjb3ItZGFyay9kZWNvcl93b3JrX3RhYmxldEAyeC5wbmcpOwogICAgfQogIH0KfQoKQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7CiAgLmhlcm8tY29udGFpbmVyIHsKICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1nL2RlY29yLWRhcmsvZGVjb3JfaGVyb19kZXNrdG9wLnBuZyk7CiAgfQoKICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksCiAgICAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwKICAgIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHsKICAgIC5oZXJvLWNvbnRhaW5lciB7CiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1nL2RlY29yLWRhcmsvZGVjb3JfaGVyb19kZXNrdG9wQDJ4LnBuZyk7CiAgICB9CiAgfQoKICAuYWJvdXQtY29udGVudCB7CiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltZy9kZWNvci1kYXJrL2RlY29yX2Fib3V0X2Rlc2t0b3AucG5nKTsKICB9CiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLAogICAgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksCiAgICAobWluLXJlc29sdXRpb246IDJkcHB4KSB7CiAgICAuYWJvdXQtY29udGVudCB7CiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1nL2RlY29yLWRhcmsvZGVjb3JfYWJvdXRfZGVza3RvcEAyeC5wbmcpOwogICAgfQogIH0KICAuYmVuZWZpdHMtY29udGFpbmVyIHsKICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1nL2RlY29yLWRhcmsvZGVjb3JfYmVuZWZpdHNfZGVza3RvcC5wbmcpOwogIH0KCiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLAogICAgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksCiAgICAobWluLXJlc29sdXRpb246IDJkcHB4KSB7CiAgICAuYmVuZWZpdHMtY29udGFpbmVyIHsKICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWcvZGVjb3ItZGFyay9kZWNvcl9iZW5lZml0c19kZXNrdG9wQDJ4LnBuZyk7CiAgICB9CiAgfQoKICAuZmFxLWRlY29yIHsKICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1nL2RlY29yLWRhcmsvZGVjb3JfZmFxX2Rlc2t0b3AucG5nKTsKICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7CiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgODclOwogICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOwogIH0KICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksCiAgICAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwKICAgIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHsKICAgIC5mYXEtZGVjb3IgewogICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltZy9kZWNvci1kYXJrL2RlY29yX2ZhcV9kZXNrdG9wQDJ4LnBuZyk7CiAgICB9CiAgfQogIC53b3JrLXRvZ2V0aGVyLWNvbnRhaW5lciB7CiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltZy9kZWNvci1kYXJrL2RlY29yX3dvcmtfZGVza3RvcC5wbmcpOwogIH0KCiAgQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksCiAgICAobWluLXJlc29sdXRpb246IDJkcHB4KSwKICAgIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSB7CiAgICAud29yay10b2dldGhlci1jb250YWluZXIgewogICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltZy9kZWNvci1kYXJrL2RlY29yX3dvcmtfZGVza3RvcEAyeC5wbmcpOwogICAgfQogIH0KfQo=",import.meta.url).href:"",y.checked=e==="dark"}v();function f(e){V(L,e.target.checked?"dark":""),v()}function J(){const e=document.createElement("link");e.rel="stylesheet",e.id="theme-link",document.head.append(e)}const g=document.querySelectorAll(".li-class-project"),h=document.getElementById("loadMore"),W=3;let d=3;h.addEventListener("click",R);function R(){for(let e=d;e<d+W&&e<g.length;e++)g[e].classList.remove("hidden");d+=W,d>=g.length&&(h.style.display="none")}new p(".accordion",{elementClass:"accordion-item",triggerClass:"accordion-subtitle",panelClass:"accordion-body",activeClass:"active",openOnInit:[0]});const B="https://portfolio-js.b.goit.study/api/reviews",a=document.querySelector(".left-arrow"),u=document.querySelector(".right-arrow");window.addEventListener("DOMContentLoaded",()=>{I.get(B).then(function(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML=K(e.data);const i=new A(".reviews-swiper",{direction:"horizontal",loop:!1,autoHeight:!0,slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}},on:{slideChange:l=>{l.isEnd?(u.disabled=!0,a.disabled=!1):l.isBeginning?a.disabled=!0:(u.disabled=!1,a.disabled=!1)}}});u.addEventListener("click",()=>{i.slideNext()}),a.addEventListener("click",()=>{i.slidePrev()})}).catch(function(e){console.error(e)})});function K(e){return e.map(({author:t,avatar_url:i,review:l})=>`<div class="swiper-slide">
           <div class="reviews-text">
           ${l}
              <div class="autor-style">
              <img class="reviews-photo" src="${i}" alt="Photo" width="40">
              <h4 class="reviews-subtitle">${t}</h4>
              </div>
           </div>
        </div>`).join("")}const r=document.querySelector(".backdrop"),N=document.querySelector(".modal-close-btn");function S(){document.body.style.overflow="hidden",r.classList.add("is-open")}function b(){document.body.style.overflow="",r.classList.remove("is-open")}N.addEventListener("click",b);r.addEventListener("click",e=>{e.target===r&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});const H=document.querySelector(".work-form"),n=document.querySelector("#user-email"),Z=document.querySelector("#user-message"),s=document.querySelector(".work-form-text");H.addEventListener("submit",async e=>{e.preventDefault();const t=n.value,i=Z.value;try{if((await I.post("https://portfolio-js.b.goit.study/api-docs",{email:t,message:i})).status!==200){s.textContent="Invalid email, try again",s.classList.remove("visually-hidden");return}n.value="",Z.value="",document.querySelector(".work-form-icon").classList.add("visually-hidden"),S()}catch{s.textContent="Something went wrong. Please check your inputs.",s.classList.remove("visually-hidden")}});n.addEventListener("input",()=>{const e=n.checkValidity();document.querySelector(".work-form-icon").classList.toggle("visually-hidden",!e),e?(s.classList.add("visually-hidden"),n.classList.remove("invalid-text")):(s.textContent="Invalid email, try again",s.classList.remove("visually-hidden"),n.classList.add("invalid-text"))});
//# sourceMappingURL=index.js.map
