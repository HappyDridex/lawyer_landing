// swiper
window.onload = () => {
    new Swiper(".certificates-swiper", {
        slidesPerView: window.innerWidth < 768 ? (window.innerWidth < 500 ? 1 : 3) : 4.2,
        spaceBetween: 30,
        initialSlide: 1,
        loop: true,
        navigation: {
            nextEl: ".certificates-swiper-buttons__next-slide-button",
            prevEl: ".certificates-swiper-buttons__prev-slide-button",
        },
        zoom: { maxRatio: 2, minRatio: 1 },
    });

    new Swiper(".cases-section__cases-swiper", {
        autoHeight: true,
        slidesPerView: window.innerWidth < 768 ? 1 : 2,
        spaceBetween: 60,
        loop: true,
        initialSlide: 0,
        navigation: {
            nextEl: ".cases-swiper-buttons__prev-case-button",
            prevEl: ".cases-swiper-buttons__next-case-button",
        },
    });
};
