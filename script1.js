const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#btn-cambiar");

boton.addEventListener("click", () => {
  titulo.textContent = "Texto cambiado con querySelector 🎉";
});