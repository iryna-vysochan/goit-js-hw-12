import 'izitoast/dist/js/iziToast.min.js';
import 'izitoast/dist/css/iziToast.min.css';


import getImagesByQuery from "/js/pixabay-api";
import * as render from "/js/render-functions";

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.form-btn-load');

let keyWord;
let page;
let totaPages;

form.addEventListener('submit', galleryUpd);
loadMoreBtn.addEventListener('click', galleryLoadMore);

async function galleryUpd(evt) {
    evt.preventDefault();

    render.hideLoadMoreButton();
    render.clearGallery();

    keyWord = evt.target.elements['search-text'].value.trim();
    page = 1;
    form.reset();

    if (!(keyWord)) {
        iziToast.warning({
            message: "Sorry, you didn't enter search query. Please try again!",
            position: "topRight",
        })
        return;
    }    

    try {
        render.showLoader();
        const data = await getImagesByQuery(keyWord, page);
        render.hideLoader();

        if (!data.totalHits) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topRight",
            });
            return;
        };
        
        totaPages = Math.ceil(data.totalHits / 15);        

        render.createGallery(data.hits);

        if (page >= totaPages) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
            });
            return;
        }

        render.showLoadMoreButton();       

    } catch (error) {
        render.hideLoader();
        iziToast.error({
            message: 'Sorry, something went wrong. Please try again!',
            position: "topRight",
        });        
    };
}

async function galleryLoadMore(evt) {   
    evt.preventDefault();    
    render.hideLoadMoreButton();

    try {
        render.showLoader();
        page++;
        const data = await getImagesByQuery(keyWord, page);
        render.hideLoader();

        render.createGallery(data.hits);

        setTimeout(() => {
                const galleryItem = document.querySelector(".gallery-item");
                const rowHeight = galleryItem.getBoundingClientRect().height;

                window.scrollBy({
                    top: 2 * rowHeight,
                    behavior: "smooth",
                });
            }, 500);

        if (page >= totaPages) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
            });
            return;
        }

        render.showLoadMoreButton();        

    } catch (error) {        
        page--;
        render.hideLoader();
        render.showLoadMoreButton();
        iziToast.error({
            message: 'Sorry, something went wrong. Please try again!',
            position: "topRight",
        });        
    };
}