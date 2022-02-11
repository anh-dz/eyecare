const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav-toggle");
const closeNav = document.querySelector(".close-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});
closeNav.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    navLink.forEach((n) => n.classList.remove("show-menu"));
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
    const navMenu = document.querySelector(".nav__menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
});
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);