const btnOpenMenu = document.querySelector("#header__openMenu");
const btnCloseMenu = document.querySelector("#header__closeMenu");
const menu = document.querySelector("#header__nav");

btnOpenMenu.addEventListener("click", () => {
  menu.classList.add("mostrar-menu");
  btnOpenMenu.style.display = "none";
  btnCloseMenu.style.display = "block";
});

btnCloseMenu.addEventListener("click", () => {
  menu.classList.remove("mostrar-menu");
  btnOpenMenu.style.display = "block";
  btnCloseMenu.style.display = "none";
});
