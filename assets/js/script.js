'use strict';
const preloader = document.querySelector('.preloader');
const hamburgerBar = document.querySelector('.hamburger__bar');
const menuList = document.querySelector('.menu-list');

window.addEventListener('load', function () {
  (function fadeOut() {
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 3000);
  })();
});

hamburgerBar.addEventListener('click', function () {
  const spans = this.querySelectorAll('span');
  spans[0].classList.toggle('rotate-45');
  spans[1].classList.toggle('opacity-0');
  spans[2].classList.toggle('-rotate-45');

  if (menuList.classList.contains('hidden')) {
    menuList.classList.remove('hidden');
    menuList.style.height = 'auto';
  } else {
    menuList.classList.add('hidden');
    menuList.style.height = '0';
  }
});

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 37,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 37,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 37,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 37,
    },
  },
});
