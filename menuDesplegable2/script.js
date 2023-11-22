const btnMenu = document.querySelector("#header__btn");
const nav = document.querySelector("#header__nav");
const links = document.querySelectorAll("#header__link");
const subMenus = document.querySelectorAll("#header__submenu");
// console.log(links);
console.log(subMenus);

// Muestra el Menu principal
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("mostrar-menu");
  nav.classList.toggle("mostrar-menu");
});

// Muestra y oculta los submenus
// Submenu 1
links[0].addEventListener("mouseover", () => {
  subMenus[0].classList.add("mostrar-submenu");
  subMenus[1].classList.remove("mostrar-submenu");
  subMenus[2].classList.remove("mostrar-submenu");
});
links[0].addEventListener("mouseout", () => {
  subMenus[1].classList.remove("mostrar-submenu");
  subMenus[2].classList.remove("mostrar-submenu");
});

// Submenu 2
links[1].addEventListener("mouseover", () => {
  subMenus[1].classList.add("mostrar-submenu");
  subMenus[0].classList.remove("mostrar-submenu");
  subMenus[2].classList.remove("mostrar-submenu");
});
links[1].addEventListener("mouseout", () => {
  subMenus[0].classList.remove("mostrar-submenu");
  subMenus[2].classList.remove("mostrar-submenu");
});

// Submenu 3
links[2].addEventListener("mouseover", () => {
  subMenus[2].classList.add("mostrar-submenu");
  subMenus[0].classList.remove("mostrar-submenu");
  subMenus[1].classList.remove("mostrar-submenu");
});
links[2].addEventListener("mouseout", () => {
  subMenus[0].classList.remove("mostrar-submenu");
  subMenus[1].classList.remove("mostrar-submenu");
});
