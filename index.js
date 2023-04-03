// validacion de usuario para que solo el usuario en linea pueda recorrer el index //

const usuariosEnLinea = JSON.parse(localStorage.getItem("usuarioEnLinea")) || false

if (!usuariosEnLinea) {
    window.location.href = "login.html"
}

// un boton de salir que borra el storage  y redirige al usuario al login //

const logout = document.getElementById("Salir")
logout.addEventListener("click", () => {
    alert("Hasta pronto")
    localStorage.removeItem("usuarioEnLinea")
    window.location.href = "login.html"
})


// En esta parte recorremos el array y creamos una card para cada objeto //

listaAutos.forEach((autosEnVenta) => {
    let contenedorAutos = document.createElement("div");
    contenedorAutos.className = "cardAutos";
    contenedorAutos.innerHTML = `
    <img src="${autosEnVenta.img}">
    <h3>Nombre : ${autosEnVenta.nombre}</h3>
    <h3>Caracteristicas : ${autosEnVenta.caracteristicas}</h3>
    <p>Precio : ${autosEnVenta.Precio}</p>
    `;
    contenedorGeneralDeAutos.append(contenedorAutos);

    let botonComprar = document.createElement("button");
    botonComprar.className = "btn btn-success";
    botonComprar.innerText = "Comprar";
    contenedorAutos.append(botonComprar);
})


