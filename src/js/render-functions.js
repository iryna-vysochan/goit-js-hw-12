import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.span-loader');
const loadMoreBtn = document.querySelector('.form-btn-load');

let lightbox = null;

export function initLightbox() {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
      overlayOpacity: 0.9,
      animationSpeed: 300,
      fadeSpeed: 250,
      close: true,
      closeText: '×',
      enableKeyboard: true,
      nav: true,
      doubleTapZoom: 1.5,
      scrollZoom: false,
      disableRightClick: true,
      docClose: true,
      history: false,
    });
  }
}

export function createGallery(images) {
  const galleryMarkup = images
    .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
          <ul class="gallery-desc">
            <li><span>Likes:</span> ${likes}</li>
            <li><span>Views:</span> ${views}</li>
            <li><span>Comments:</span> ${comments}</li>
            <li><span>Downloads:</span> ${downloads}</li>
          </ul>
        </a>
      </li>
    `)
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  if (lightbox) lightbox.refresh();
  else initLightbox();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.add('loader');
  loadMoreBtn.disabled = true;
}

export function hideLoader() {
  loader.classList.remove('loader');
  loadMoreBtn.disabled = false;
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('is-active');
  loadMoreBtn.disabled = false;
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('is-active');
  loadMoreBtn.disabled = true;
}
