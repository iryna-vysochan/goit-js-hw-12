import{a as b,S,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function m(a,e){const r=new URLSearchParams({key:"53047791-da6bf0178b39a3cb2727ecc21",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await b.get(`https://pixabay.com/api/?${r}`)).data}const g=document.querySelector(".gallery"),p=document.querySelector(".span-loader"),f=document.querySelector(".form-btn-load"),P=new S(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function h(a){const e=a.map(r=>`<li class="gallery-item">
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
                    </li>`).join("");g.insertAdjacentHTML("beforeend",e),P.refresh()}function R(){g.innerHTML=""}function L(){p.classList.add("loader")}function c(){p.classList.remove("loader")}function u(){f.classList.add("is-active")}function w(){f.classList.remove("is-active")}const v=document.querySelector(".form"),q=document.querySelector(".form-btn-load");let i,o,y;v.addEventListener("submit",M);q.addEventListener("click",$);async function M(a){if(a.preventDefault(),w(),R(),i=a.target.elements["search-text"].value.trim(),o=1,v.reset(),!i){n.warning({message:"Sorry, you didn't enter search query. Please try again!",position:"topRight"});return}try{L();const e=await m(i,o);if(c(),!e.totalHits){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(y=Math.ceil(e.totalHits/15),h(e.hits),o>=y){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}u()}catch{c(),n.error({message:"Sorry, something went wrong. Please try again!",position:"topRight"})}}async function $(a){a.preventDefault(),w();try{L(),o++;const e=await m(i,o);if(c(),h(e.hits),setTimeout(()=>{const l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:2*l,behavior:"smooth"})},500),o>=y){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}u()}catch{o--,c(),u(),n.error({message:"Sorry, something went wrong. Please try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
