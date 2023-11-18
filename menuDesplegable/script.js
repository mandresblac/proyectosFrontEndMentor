const btnMenu = document.querySelector("#header__menu");
const btnCerrar = document.querySelector("#header__close");
const menu = document.querySelector("#header__nav");

btnMenu.addEventListener("click", () => {
  menu.classList.remove("ocultar");
  menu.classList.add("mostrar");
});

btnCerrar.addEventListener("click", () => {
  menu.classList.remove("mostrar");
  menu.classList.add("ocultar");
});
