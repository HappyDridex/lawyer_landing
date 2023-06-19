// swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    zoom: { maxRatio: 2, minRatio: 1 },
});

const prevSlide = () => swiper.slidePrev();
const nextSlide = () => swiper.slideNext();
