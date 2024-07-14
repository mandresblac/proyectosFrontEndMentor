const rangeInput = document.querySelector("#range");
const numberInput = document.querySelector("#length");
const result = document.querySelector("#result");

rangeInput.addEventListener("input", sincronizarValores);
numberInput.addEventListener("input", validarRango);

// Función para sincronizar los valores entre los dos inputs (numberInput y rangeInput)
function sincronizarValores() {
  // Actualizar el valor del input number con el valor del input range
  numberInput.value = rangeInput.value;
}

// Funcion para validar que el valor del input number esté dentro del rango del input range
function validarRango() {
  if (
    // El valor inical de numberInput y rangeInput es de tipo string por eso tenemos que convertirlo a tipo number con el metodo Number()
    Number(numberInput.value) >= Number(rangeInput.min) &&
    Number(numberInput.value) <= Number(rangeInput.max)
  ) {
    rangeInput.value = numberInput.value;
  }
}
