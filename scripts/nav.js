const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const logo = document.querySelector("header .logo img");
function toggleNav() {
  hamburger.classList.toggle("hamburger-fixed");
  navLinks.classList.toggle("open");
  logo.classList.toggle("logo-fixed");
};

hamburger.addEventListener("click", toggleNav);

for(var i = 0; i < links.length; i++){
  links[i].addEventListener("click", () => {
    setTimeout(toggleNav, 300)
  })
};
