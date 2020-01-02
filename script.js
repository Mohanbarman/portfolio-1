const burger__div = document.querySelector(".hamburger-btn");
const menu__div = document.querySelector(".menu");
const body__body = document.querySelector("body");

burger__div.addEventListener("click", () => {
  menu__div.classList.toggle("menu-active");
  burger__div.classList.toggle("hamburger-close-btn");
  body__body.classList.toggle("body-menu-active");
});
