// swiper

const certificatesSwiper = new Swiper(".certificates-swiper", {
    slidesPerView: window.innerWidth < 768 ? (window.innerWidth < 500 ? 1 : 3) : 4.2,
    spaceBetween: 30,
    initialSlide: 1,
    navigation: {
        nextEl: ".next-certificate-button",
        prevEl: ".prev-certificate-button",
    },
    zoom: { maxRatio: 2, minRatio: 1 },
});

const casesSwiper = new Swiper(".cases-swiper", {
    slidesPerView: window.innerWidth < 768 ? 1 : 2,
    spaceBetween: 60,
    initialSlide: 0,
    navigation: {
        nextEl: ".next-case-button",
        prevEl: ".prev-case-button",
    },
    zoom: { maxRatio: 2, minRatio: 1 },
});
