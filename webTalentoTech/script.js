const btnOpenMenu = document.querySelector("#header__openMenu");
const btnCloseMenu = document.querySelector("#header__closeMenu");
const menu = document.querySelector("#header__nav");

btnOpenMenu.addEventListener("click", () => {
  menu.classList.add("mostrar-menu");
  btnOpenMenu.classList.toggle("ocultar");
  btnCloseMenu.classList.toggle("mostrar");
});

btnCloseMenu.addEventListener("click", () => {
  menu.classList.remove("mostrar-menu");
  btnCloseMenu.classList.toggle("mostrar");
  btnOpenMenu.classList.toggle("ocultar");
});
