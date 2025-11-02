import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "/js/pixabay-api";
import * as render from "/js/render-functions";

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.form-btn-load');

let keyWord;
let page;
let totalPages;

const IMAGES_PER_PAGE = 15;


form.addEventListener('submit', galleryUpdate);
loadMoreBtn.addEventListener('click', galleryLoadMore);


function showError(message) {
  iziToast.error({
    message,
    position: "topRight",
  });
}

async function galleryUpdate(evt) {
  evt.preventDefault();

  const input = evt.target.elements['search-text'].value.trim();
  if (!input) {
    iziToast.warning({
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }

  keyWord = input;
  page = 1;
  form.reset();

  render.hideLoadMoreButton();
  render.clearGallery();

  try {
    render.showLoader();
    const data = await getImagesByQuery(keyWord, page);
    render.hideLoader();

    if (!data.totalHits) {
      showError("No images found. Try another query.");
      return;
    }

    totalPages = Math.ceil(data.totalHits / IMAGES_PER_PAGE);

    render.createGallery(data.hits);

    if (page < totalPages) render.showLoadMoreButton();
    else iziToast.info({
      message: "End of search results",
      position: "topRight",
    });

  } catch (error) {
    console.error(error);
    render.hideLoader();
    showError("Something went wrong. Please try again!");
  }
}


async function galleryLoadMore(evt) {
  evt.preventDefault();
  render.hideLoadMoreButton();
  page++;

  try {
    render.showLoader();
    const data = await getImagesByQuery(keyWord, page);
    render.hideLoader();

    render.createGallery(data.hits);

    
    const lastItem = document.querySelector(".gallery-item:last-child");
    if (lastItem) lastItem.scrollIntoView({ behavior: "smooth", block: "start" });

    if (page < totalPages) render.showLoadMoreButton();
    else iziToast.info({
      message: "End of search results",
      position: "topRight",
    });

  } catch (error) {
    console.error(error);
    page--;
    render.hideLoader();
    render.showLoadMoreButton();
    showError("Something went wrong. Please try again!");
  }
}
