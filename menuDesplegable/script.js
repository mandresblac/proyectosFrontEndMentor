const btnAbrirMenu = document.querySelector("#header__menu");
const btnCerrarMenu = document.querySelector("#header__close");
const menu = document.querySelector("#header__nav");
const tagDetails = document.querySelectorAll(".header__details");
console.log(tagDetails);

btnAbrirMenu.addEventListener("click", () => {
  menu.classList.remove("ocultar");
  menu.classList.add("mostrar");
});

btnCerrarMenu.addEventListener("click", () => {
  menu.classList.remove("mostrar");
  menu.classList.add("ocultar");

  /*  Logica para cuando se haga click en el boton de cerrar, tambien cierren los submenus.
  1- Una vez obtenidas todas las etiquetas con la clase .details del documento html (en la línea 4 de este docuemnto) obtenemos un NodeList de 3 elementos que es como un array el cual podemos iterar con un forEach */

  tagDetails.forEach((tag) => {
    /* 3 - Verificamos si el elemento tag contiene el atributo "open" (con tag.hasAttribute("open")) y si lo tiene le decimos que se lo quite (con tag.removeAttribute("open")), de esta manera los submenus se cerraran automaticamente al cerrar el menu */
    if (tag.hasAttribute("open")) {
      tag.removeAttribute("open");
    }
  });
});

/* Para que salo una etiqueta del subMenu este abierta a la vez */
tagDetails.forEach((tag) => {
  // Agrega un evento de clic a cada tag
  tag.addEventListener("click", () => {
    // Cierra todas las etiquetas details excepto la actual
    tagDetails.forEach((otherTag) => {
      if (otherTag !== tag) {
        otherTag.removeAttribute("open");
      }
    });
  });
});
