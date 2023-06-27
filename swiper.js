// swiper
const slidesPerView = window.innerWidth < 768 ? (window.innerWidth < 500 ? 1 : 3) : 4.2;

const swiper = new Swiper(".swiper", {
    slidesPerView,
    spaceBetween: 30,
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    zoom: { maxRatio: 2, minRatio: 1 },
});

const prevSlide = () => swiper.slidePrev();
const nextSlide = () => swiper.slideNext();
