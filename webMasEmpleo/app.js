const btnOpenMenu = document.querySelector("#header__openMenu");
const btnCloseMenu = document.querySelector("#header__closeMenu");
const nav = document.querySelector("#header__nav");

btnOpenMenu.addEventListener("click", () => {
  nav.classList.add("mostrar-nav");
  nav.classList.remove("ocultar-nav");
  btnCloseMenu.classList.add("mostrar-boton");
  btnOpenMenu.classList.add("ocultar-boton");
});

btnCloseMenu.addEventListener("click", () => {
  nav.classList.remove("mostrar-nav");
  nav.classList.add("ocultar-nav");
  btnCloseMenu.classList.remove("mostrar-boton");
  btnOpenMenu.classList.remove("ocultar-boton");
});
