// swiper

const certificatesSwiper = new Swiper(".certificates-swiper", {
    slidesPerView: window.innerWidth < 768 ? (window.innerWidth < 500 ? 1 : 3) : 4.2,
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    navigation: {
        nextEl: ".next-certificate-button",
        prevEl: ".prev-certificate-button",
    },
    zoom: { maxRatio: 2, minRatio: 1 },
});

const casesSwiper = new Swiper(".cases-swiper", {
    autoHeight: true,
    slidesPerView: window.innerWidth < 768 ? 1 : 2,
    spaceBetween: 60,
    loop: true,
    initialSlide: 0,
    navigation: {
        nextEl: ".next-case-button",
        prevEl: ".prev-case-button",
    },
});
