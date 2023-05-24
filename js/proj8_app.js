const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEL = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEL.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEL.classList.add("active");
});