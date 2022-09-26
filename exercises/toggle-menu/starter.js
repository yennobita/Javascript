const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
  event.target.classList.toggle("fa-times");
  event.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  }
}
