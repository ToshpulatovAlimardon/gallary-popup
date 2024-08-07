const imgEl = document.querySelectorAll(".images-content img"),
  popupEl = document.querySelector(".popup-image"),
  popupImageEl = document.querySelector(".popup-image img"),
  popupSpanEl = document.querySelector(".popup-image span");

imgEl.forEach((image) => {
  image.addEventListener("click", () => {
    popupEl.style.display = "block";
    popupImageEl.src = image.getAttribute("src");
  });
});

popupSpanEl.addEventListener("click", () => {
  popupEl.style.display = "none";
});
