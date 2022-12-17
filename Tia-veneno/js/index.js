import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

 new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay:5000
    },
  
    // If we need pagination
    loop: true,
    speed:500,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
    
    
  });