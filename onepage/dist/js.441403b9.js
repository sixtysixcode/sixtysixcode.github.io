parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UE4P":[function(require,module,exports) {
var e=document.getElementsByClassName("core"),t=document.getElementById("mobile-nav"),n=document.getElementsByClassName("nav__mobile__background"),o=document.getElementsByClassName("nav__mobile__items"),s=document.getElementsByClassName("nav__mobile__items__item"),c=document.getElementById("hamburger"),a=document.getElementsByClassName("nav__desktop__items__item"),i=document.getElementsByClassName("nav__desktop__items"),l=document.getElementsByClassName("core__scroll-top"),r=document.getElementById("themeBox"),d=document.getElementById("themeToggleInput"),m=document.querySelectorAll(".skills__box__loader__inner"),u=document.querySelectorAll("section"),v=document.getElementById("logo");function f(){t.classList.contains("active")?_():C()}function _(){$(t).removeClass("active"),$(n).removeClass("active"),$(c).removeClass("active"),setTimeout(function(){$(v).removeClass("active")},200)}function C(){$(t).addClass("active"),$(n).addClass("active"),$(c).addClass("active"),setTimeout(function(){$(v).addClass("active")},200)}function y(){$(a).removeClass("active"),$(this).addClass("active")}function g(){$(s).removeClass("active"),$(this).addClass("active")}function p(e){map.setOptions({styles:e})}function h(){$(d).is(":checked")?($(e).addClass("dark"),p(darkTheme)):($(e).removeClass("dark"),p(lightTheme))}function E(){document.querySelector("#emailInput").select(),document.execCommand("copy")}$(document).ready(function(){c.addEventListener("click",f),d.addEventListener("click",h),document.querySelector("#emailCopy").addEventListener("click",E);for(var e=0;e<a.length;e++)a[e].addEventListener("click",y);for(var t=0;t<s.length;t++)s[t].addEventListener("click",g);$(l).on("click",function(){$("html, body").animate({scrollTop:$("#body").offset().top},500)}),$(r).on("click",function(){r.classList.contains("active")?$(r).removeClass("active"):$(r).addClass("active")}),$(document).scroll(function(){$(this).scrollTop()>100?$(l).css("opacity","100%"):$(l).css("opacity","0")})});var k={root:null,rootMargin:"0px 0px 0px 0px;",threshold:0},b=new IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>.3&&(e.target.classList.add("loaded"),b.unobserve(e.target))},k)});if(m.forEach(function(e){b.observe(e)}),"IntersectionObserver"in window){var B={root:null,rootMargin:"0px",threshold:.5},T=new IntersectionObserver(I,B);function I(e,t){e.forEach(function(e){if(e.intersectionRatio>.5){var t=e.target.id.replace("-section","");$(a).removeClass("active"),document.querySelector(".nav__desktop__items__item#"+t).classList.add("active")}})}u.forEach(function(e){return T.observe(e)})}function x(e){var t,n=$(e.target).attr("id");n.indexOf("smallscreen-")>=0?(t="#"+n.replace("smallscreen-",""),$(a).removeClass("active"),$(t).addClass("active")):(t="#smallscreen-"+n,$(s).removeClass("active"),$(t).addClass("active"))}$(a).on("click",function(){var e=$(this).data("section"),t=$("body").find("section#"+e+"-section");setTimeout(function(){$("html, body").animate({scrollTop:$(t).offset().top-150},500)},500)}),$(s).on("click",function(){var e=$(this).data("section"),t=$("body").find("section#"+e+"-section");f(),setTimeout(function(){$("html, body").animate({scrollTop:$(t).offset().top-50},500)},1e3)}),$(s).on("click",function(e){x(e)}),$(a).on("click",function(e){x(e)});
},{}]},{},["UE4P"], null)
//# sourceMappingURL=/js.441403b9.js.map