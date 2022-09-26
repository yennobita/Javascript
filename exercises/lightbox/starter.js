const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
  const image = event.target.getAttribute("src");
  const temlate = `<div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", temlate);
}
let index = 0;
document.body.addEventListener("click", function (event) {
  const lightImage = document.querySelector(".lightbox-image");
  if (!lightImage) return;
  let lightSrc = lightImage.getAttribute("src");
  index = [...images].findIndex(
    (item) => item.getAttribute("src") === lightSrc
  );

  if (event.target.matches(".lightbox")) {
    event.target.parentNode.removeChild(event.target);
  } else if (event.target.matches(".lightbox-next")) {
    index = index + 1;
    if (index > images.length - 1) {
      index = 0;
    }
    displayLightImage(lightImage, index);
  } else if (event.target.matches(".lightbox-prev")) {
    index = index - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    displayLightImage(lightImage, index);
  }
});
function displayLightImage(lightImage, index) {
  const newSrc = [...images][index].getAttribute("src");
  lightImage.setAttribute("src", newSrc);
}
