const btnOpenMenu = document.querySelector("#header__openMenu");
const btnCloseMenu = document.querySelector("#header__closeMenu");
const menu = document.querySelector("#header__nav");
const dialogBox = document.querySelector("#footer__dialogBox");
const btnOpenDialog = document.querySelector("#footer__btnOpenDialog");
const btnCloseDialog = document.querySelector("#footer__btnCloseDialog");
const btnParagraphButton = document.querySelector("#footer__paragraphButton");
const footerAccesibility = document.querySelector("#footer__accessibility");
const btnOpenAccesibility = document.querySelector(
  "#footer__btnOpenAccessibility"
);
const btnCloseAccesibility = document.querySelector(
  "#footer__btnCloseAccessibility"
);

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

btnParagraphButton.addEventListener("click", () => {
  dialogBox.close();
});

/* Botones para abrir y cerrar el panel de accecibilidad que esta en el Footer */
btnOpenAccesibility.addEventListener("click", () => {
  footerAccesibility.showModal();
});

btnCloseAccesibility.addEventListener("click", () => {
  footerAccesibility.close();
});
