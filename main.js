const hamburger = document.querySelector(".fa-bars");
const hamburgerClose = document.querySelector(".fa-times");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", function() {
  hamburgerMenu.classList.toggle("active");
});

hamburgerClose.addEventListener("click", function(){
  hamburgerMenu.classList.remove("active");
});
