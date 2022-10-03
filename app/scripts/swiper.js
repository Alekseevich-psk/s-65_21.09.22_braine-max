console.log('log');
(function () {
    const parent = document.querySelector(".swiper-container");
    

    if (!parent) return;

    new Swiper(parent, {
        navigation: {
            nextEl: ".articles .sl-arrows__arrow--next",
            prevEl: ".articles .sl-arrows__arrow--prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 28,
                slidesPerView: 1,
            },
            728: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            960: {
                spaceBetween: 32,
                slidesPerView: 3,
            }
        },
    });
})();