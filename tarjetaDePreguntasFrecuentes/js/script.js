document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos todas las etiquetas details del documento Html en un NodeList que es como un array el cual podemos iterar con un ciclo
  const detailsElements = document.querySelectorAll("details");

  // Iteramos detailsElements con un forEach
  detailsElements.forEach(function (detail) {
    // Agregamos un evento de escucha a cada elemento detail
    detail.addEventListener("toggle", function () {
      // Obtenemos todos los elementos summary que estan dentro del detail actual
      const summaries = detail.querySelectorAll("summary");

      // Iteramos sobre cada elemento summary y ajustamos los estilos
      summaries.forEach(function (summary) {
        // Verificamos si el details está abierto
        if (detail.open) {
          // Si está abierto, establecemos el color y peso de la letra en bold
          summary.style.color = "#1c1d36";
          summary.style.fontWeight = "bold";
        } else {
          // Si está cerrado, restauramos el color y peso de la letra a normal
          summary.style.color = "#4a4b5e";
          summary.style.fontWeight = "normal";
        }
      });
    });
  });
});

/* document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos todas las etiquetas details del documento Html en un NodeList que es como un array el cual podemos iterar con un ciclo
  const detailsElements = document.querySelectorAll("details");

  // Iteramos detailsElements con un forEach
  detailsElements.forEach(function (detail) {
    // Agregamos un evento de escucha a cada elemento detail
    detail.addEventListener("toggle", function () {
      // Obtenemos todos los elementos summary que estan dentro del detail actual
      const summaries = detail.querySelectorAll("summary");

      // Iteramos sobre cada elemento summary
      summaries.forEach(function (summary) {
        // Obtenemos todos los elementos card__arrow que estan dentro del summary actual
        const rows = document.querySelectorAll("#card__arrow");

        // Iteramos sobre cada elemento row
        rows.forEach(function (row) {
          console.log(row);
          // Verificamos si el details está abierto
          if (detail.open) {
            // Si está abierto, establecemos el color, peso de la letra en bold y rotamos row 180° agregandole la clase "rotate-arrow"
            summary.style.color = "#1c1d36";
            summary.style.fontWeight = "bold";
            row.classList.add("rotate-arrow");
          } else {
            // Si está cerrado, restauramos el color y peso de la letra a normal
            summary.style.color = "#4a4b5e";
            summary.style.fontWeight = "normal";
            row.classList.remove("rotate-arrow");
          }
        });
      });
    });
  });
}); */
