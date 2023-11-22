const btnMenu = document.querySelector("#header__btn");
const nav = document.querySelector("#header__nav");
const tagDetails = document.querySelectorAll("details");
console.log(tagDetails);

btnMenu.addEventListener("click", () => {
  // Muestra el Menu principal
  btnMenu.classList.toggle("mostrar-menu");
  nav.classList.toggle("mostrar-menu");

  /*  Logica para cuando se haga click en el boton de cerrar, tambien cierren los submenus.
  1- Una vez obtenidas todas las etiquetas "details" del documento html (en la línea 3 de este docuemnto) obtenemos un NodeList de 3 elementos que es como un array el cual podemos iterar con un forEach */
  tagDetails.forEach((tag) => {
    /* 3 - Verificamos si el elemento tag contiene el atributo "open" (con tag.hasAttribute("open")) y si lo tiene le decimos que se lo quite (con tag.removeAttribute("open")), de esta manera los submenus se cerraran automaticamente al cerrar el menu principal */
    if (tag.hasAttribute("open")) {
      tag.removeAttribute("open");
    }
  });
});

/* Loagica para que salo una etiqueta del subMenu este abierta a la vez */
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
