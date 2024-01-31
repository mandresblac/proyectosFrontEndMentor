const btnOpenMenu = document.querySelector("#header__openMenu");
const btnCloseMenu = document.querySelector("#header__closeMenu");
const nav = document.querySelector("#header__nav");

btnOpenMenu.addEventListener("click", () => {
  nav.classList.toggle("mostrar-nav");
  btnCloseMenu.classList.toggle("mostrar-btn");
  btnOpenMenu.classList.toggle("ocultar-btn");
});
