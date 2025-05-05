const menubar = document.querySelector(".menubar");
const xMenubar = document.querySelector(".x-menubar");
const menuList = document.querySelector(".menuList");
const nav = document.querySelector("nav");

// Start with x-menubar hidden
xMenubar.style.display = "none";

menubar.addEventListener("click", () => {
  menuList.classList.add("active");
  menubar.style.display = "none";
  xMenubar.style.display = "block";
  nav.style.backgroundColor = "#000000cc";
});

xMenubar.addEventListener("click", () => {
  menuList.classList.remove("active");
  menubar.style.display = "block";
  xMenubar.style.display = "none";
  nav.style.backgroundColor = "transparent"; // or your default background
});
