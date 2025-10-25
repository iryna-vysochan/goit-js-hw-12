import{a as v,S as b}from"./assets/vendor-zUMEbJhD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function y(a,e){const r=new URLSearchParams({key:"52124620-04c3728bcdfdd891621e81587",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await v.get(`https://pixabay.com/api/?${r}`)).data}const m=document.querySelector(".gallery"),g=document.querySelector(".span-loader"),p=document.querySelector(".form-btn-load"),S=new b(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function f(a){const e=a.map(r=>`<li class="gallery-item">
                        <a class="gallery-link" href="${r.largeImageURL}">
                        <img
                            class="gallery-img"
                            src="${r.webformatURL}"
                            alt="${r.tags}"
                        />
                        <ul class="gallery-desc">
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Likes</span>
                                <span class="gallery-desc-item-value">${r.likes}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Views</span>
                                <span class="gallery-desc-item-value">${r.views}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Comments</span>
                                <span class="gallery-desc-item-value">${r.comments}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Downloads</span>
                                <span class="gallery-desc-item-value">${r.downloads}</span>
                            </li>
                        </ul>
                        </a>
                    </li>`).join("");m.insertAdjacentHTML("beforeend",e),S.refresh()}function P(){m.innerHTML=""}function h(){g.classList.add("loader")}function l(){g.classList.remove("loader")}function d(){p.classList.add("is-active")}function L(){p.classList.remove("is-active")}const w=document.querySelector(".form"),R=document.querySelector(".form-btn-load");let n,o,u;w.addEventListener("submit",q);R.addEventListener("click",T);async function q(a){if(a.preventDefault(),L(),P(),n=a.target.elements["search-text"].value.trim(),o=1,w.reset(),!n){iziToast.warning({message:"Sorry, you didn't enter search query. Please try again!",position:"topRight"});return}try{h();const e=await y(n,o);if(l(),!e.totalHits){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(u=Math.ceil(e.totalHits/15),f(e.hits),o>=u){iziToast.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}d()}catch{l(),iziToast.error({message:"Sorry, something went wrong. Please try again!",position:"topRight"})}}async function T(a){a.preventDefault(),L();try{h(),o++;const e=await y(n,o);if(l(),f(e.hits),setTimeout(()=>{const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:2*i,behavior:"smooth"})},500),o>=u){iziToast.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}d()}catch{o--,l(),d(),iziToast.error({message:"Sorry, something went wrong. Please try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
