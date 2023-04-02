alert("practicaLocalStorage")

let validarForm = document.getElementById("FormValidar")
validarForm.addEventListener("submit", formValidar);
function formValidar(e) {
    e.preventDefault();
    console.log(e)
    console.log("form enviado")

}


function gurardarlocalStorage() { }
let nombre = "Juan"
let persona = {
    nombre: "fede",
    mail: "fede@fede.com",
    pass: 1234
}

localStorage.setItem("claveNombre", nombre)
localStorage.setItem("clavePersona", JSON.stringify(persona))

function obtenerlocalStorage() {
    let nombre = localStorage.getItem("claveNombre")
    let persona = JSON.parse(localStorage.getItem("clavePersona"))
    console.log(nombre)
    console.log(persona)
}

function main() {
    gurardarlocalStorage();
    obtenerlocalStorage();
}

let botonUno = document.getElementById("aceptar")
botonUno.addEventListener("click", main)

