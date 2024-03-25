const navigation = document.querySelector("[data-id='menu']");

navigation.addEventListener("click", (e) => {
  const currentElement = e.target;

  if (currentElement.matches("[data-dropdown], [data-dropdown] *")) {
    const parentLi = currentElement.closest("li");

    if (parentLi.matches("[data-toggle]")) {
      // Quita el atributo
      parentLi.removeAttribute("data-toggle");
    } else {
      // Agrega el atributo
      parentLi.setAttribute("data-toggle", "");
    }
  }
});
