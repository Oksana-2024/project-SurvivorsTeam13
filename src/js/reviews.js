import Swiper from 'swiper';
import 'swiper/css';
import axios from 'axios';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

window.addEventListener('DOMContentLoaded', () => {
  axios
    .get(URL)
    .then(function (response) {
      const swiperWrapper = document.querySelector('.swiper-wrapper');
      swiperWrapper.innerHTML = createMarkup(response.data);
      const swiper = new Swiper('.reviews-swiper', {
        direction: 'horizontal',
        loop: false,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 32,

        breakpoints: {
          1280: {
            slidesPerView: 2,
          },
        },
        on: {
          slideChange: swiper => {
            if (swiper.isEnd) {
              rightBtn.disabled = true;
              leftBtn.disabled = false;
            } else if (swiper.isBeginning) {
              leftBtn.disabled = true;
            } else {
              rightBtn.disabled = false;
              leftBtn.disabled = false;
            }
          },
        },
      });

      rightBtn.addEventListener('click', () => {
        swiper.slideNext();
      });
      leftBtn.addEventListener('click', () => {
        swiper.slidePrev();
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});

function createMarkup(items) {
  return items
    .map(
      ({ author, avatar_url, review }) =>
        `<div class="swiper-slide">
           <div class="reviews-text">
           ${review}
              <div class="autor-style">
              <img class="reviews-photo" src="${avatar_url}" alt="Photo" width="40">
              <h4 class="reviews-subtitle">${author}</h4>
              </div>
           </div>
        </div>`
    )
    .join('');
}
