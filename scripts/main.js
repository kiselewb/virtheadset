// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 50,
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 50,
    rewind: true,

    breakpoints: {
      1210: {
        perView: 2,
        gap: 0,
      },
      990: {
        perView: 2,
        gap: 20,
      },
      770: {
        perView: 1.3,
        gap: 20,
      },
      480: {
        perView: 1.1,
        gap: 10,
      },
      370: {
        perView: 1,
        gap: 0,
      }
    }
}).mount()