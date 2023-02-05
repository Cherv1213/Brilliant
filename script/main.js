"use strict"

new Swiper('.image-slider',{

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    keyboard: {
      enabled: true,
    },
    grabCursor:true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 74,
    breakpoints :{
      760:{
         slidesPerView: 2,
         spaceBetween: 80,

      },
      320:{
         slidesPerView: 1,
      },
      1200:{
         slidesPerView: 3,
      },
    }
});

new Swiper('.image-in-slider',{
   grabCursor: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   
});


//менЮ бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
   iconMenu.addEventListener("click", function (e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

// прокрутка при клике 

   const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
   if (menuLinks.length > 0){
      menuLinks.forEach(menuLink => {
         menuLink.addEventListener("click", onMenuLinkClick);
      });

      function onMenuLinkClick(e) {
         const menuLink = e.target;
         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset; 

            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
         }
      }
   }
   const menuLink = document.querySelectorAll('.footer__link[data-goto]');
   if (menuLink.length > 0){
      menuLink.forEach(menuLink => {
         menuLink.addEventListener("click", onMenuLinkClick);
      });

      function onMenuLinkClick(e) {
         const menuLink = e.target;
         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset; 

            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
         }
      }
   }

     
   

    
