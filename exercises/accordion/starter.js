const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
const activeStr = "is-active";
function handleClickAccordion(event) {
  //   console.log(event.target);
  const content = event.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr);
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  }

  const icon = event.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
