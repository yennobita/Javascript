const button = document.querySelector(".change");
button, addEventListener("click", handleChangeColor);
const colors = [
  "#ffa400",
  "#00aefd",
  "#ff6bcb",
  "#07a787",
  "#2979ff",
  "#e74c3c",
  "#3D6EF7",
];
function handleChangeColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
