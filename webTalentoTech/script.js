const btnOpenMenu = document.querySelector("#header__openMenu");
const btnCloseMenu = document.querySelector("#header__closeMenu");
const menu = document.querySelector("#header__nav");
const dialogBox = document.querySelector("#footer__dialogBox");
const btnOpenDialog = document.querySelector("#footer__btnOpenDialog");
const btnCloseDialog = document.querySelector("#footer__btnCloseDialog");

/* Botones para abrir y cerrar el menu principal */
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

/* Botones para abrir y cerrar la ventana modal del Footer */
btnOpenDialog.addEventListener("click", () => {
  dialogBox.showModal();
});

btnCloseDialog.addEventListener("click", () => {
  dialogBox.close();
});
