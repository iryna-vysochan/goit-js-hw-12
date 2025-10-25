import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.span-loader');
const loadmorebtn = document.querySelector('.form-btn-load');
const lightbox = new SimpleLightbox('.gallery-link', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 1,
});

export function createGallery(images) {
    const galleryStr = images
        .map(image => {
            return `<li class="gallery-item">
                        <a class="gallery-link" href="${image.largeImageURL}">
                        <img
                            class="gallery-img"
                            src="${image.webformatURL}"
                            alt="${image.tags}"
                        />
                        <ul class="gallery-desc">
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Likes</span>
                                <span class="gallery-desc-item-value">${image.likes}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Views</span>
                                <span class="gallery-desc-item-value">${image.views}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Comments</span>
                                <span class="gallery-desc-item-value">${image.comments}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Downloads</span>
                                <span class="gallery-desc-item-value">${image.downloads}</span>
                            </li>
                        </ul>
                        </a>
                    </li>`})
        .join("");

    gallery.insertAdjacentHTML('beforeend', galleryStr);    
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.add('loader');
}

export function hideLoader() {    
    loader.classList.remove('loader');
}

export function showLoadMoreButton() {
    loadmorebtn.classList.add('is-active');
}

export function hideLoadMoreButton() {
    loadmorebtn.classList.remove('is-active');
}