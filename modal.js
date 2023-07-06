import { casesList } from "./cases-list.js";

const modalWrapper = document.getElementById("modal-wrapper");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalPrevSlideBtn = document.getElementById("modal-prev");
const modalNextSlideBtn = document.getElementById("modal-next");
const modalCloseBtn = document.getElementById("modal-close");
let activeSlide;

modalPrevSlideBtn.onclick = () => switchSlide(-1);
modalNextSlideBtn.onclick = () => switchSlide(1);
modalCloseBtn.onclick = (e) => hideModal(e);

document.addEventListener("keydown", hideModal);

document.querySelectorAll(".cases-swiper .swiper-slide").forEach((slide) => {
    slide.addEventListener("click", (evt) => {
        evt.stopPropagation();
        activeSlide = casesList.find((caseEl) => caseEl.id === evt.currentTarget.id);
        renderSlide();
    });
});

function switchSlide(step) {
    if (!activeSlide) return;
    const firstSlise = casesList[0];
    const lastSlide = casesList[casesList.length - 1];
    const nextSlide = casesList.find((caseEl) => +caseEl.id === +activeSlide.id + step);
    activeSlide = nextSlide || (step === 1 ? firstSlise : lastSlide);
    renderSlide();
}

function renderSlide() {
    modalTitle.innerText = activeSlide?.title;
    modalText.innerText = activeSlide?.body;
    modalWrapper.style.display = "flex";
    setTimeout(() => (modalWrapper.style.opacity = 1), 0);
}

function hideModal(evt) {
    if (evt?.key === "Escape" || evt instanceof PointerEvent)
        modalWrapper.style.opacity = 0;
    setTimeout(() => (modalWrapper.style.display = "none"), 300);
}
