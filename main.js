const hamburger = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click",() => {
  hamburger.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
})