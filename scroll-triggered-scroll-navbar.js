window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 450) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
