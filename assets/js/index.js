!function(){"use strict";const t=(t,e=!1)=>(t=t.trim(),e?[...document.querySelectorAll(t)]:document.querySelector(t)),e=(e,o,i,s=!1)=>{let a=t(o,s);a&&(s?a.forEach(t=>t.addEventListener(e,i)):a.addEventListener(e,i))},o=e=>{let o=t("#header").offsetHeight,i=t(e).offsetTop;window.scrollTo({top:i-o,behavior:"smooth"})};let i=t(".back-to-top");if(i){const t=()=>{window.scrollY>100?i.classList.add("active"):i.classList.remove("active")};window.addEventListener("load",t),s=document,a=t,s.addEventListener("scroll",a)}var s,a;e("click",".mobile-nav-toggle",function(e){t("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),e("click",".navbar .dropdown > a",function(e){t("#navbar").classList.contains("navbar-mobile")&&(e.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),e("click",".scrollto",function(e){if(t(this.hash)){e.preventDefault();let i=t("#navbar");if(i.classList.contains("navbar-mobile")){i.classList.remove("navbar-mobile");let e=t(".mobile-nav-toggle");e.classList.toggle("bi-list"),e.classList.toggle("bi-x")}o(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&t(window.location.hash)&&o(window.location.hash)});let l=t("#preloader");l&&window.addEventListener("load",()=>{l.remove()})}();