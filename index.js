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

// Mi carrito //

const verMiCarrito = document.getElementById("verMiCarrito")
let miCarritoVacio = []
const contenedorModal = document.getElementById("contenedor-modal")



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

    // le doy funcionalidad al boton para que almacene en el carrito con una prueba //

    botonComprar.addEventListener("click", () => {
        miCarritoVacio.push({
            id: autosEnVenta.id,
            img: autosEnVenta.img,
            nombre: autosEnVenta.nombre,
            caracteristicas: autosEnVenta.caracteristicas,
            precio: autosEnVenta.precio
        })
        console.log(miCarritoVacio)
    })

})

//creo un modal donde se puedan reflejar mi carrito

verMiCarrito.addEventListener("click", () => {
    contenedorModal.innerHTML = "";
    contenedorModal.style.display = "flex"
    console.log("funciona el boton");
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
    <h1 class="modalTitulo">Mi carrito</h1>
    `;
    contenedorModal.append(modalHeader);

    const modalBoton = document.createElement("h1");
    modalBoton.innerText = "❌";
    modalBoton.className = "boton-modal-estilos btn btn-link";
    modalBoton.addEventListener("click", () => {
        contenedorModal.style.display = "none";
    })
    modalHeader.append(modalBoton);

    miCarritoVacio.forEach((autosCarrito) => {
        let MicarritoAutos = document.createElement("div");
        MicarritoAutos.className = "cardCarritoStilos";
        MicarritoAutos.innerHTML = `
        <img src="${autosCarrito.img}">
        <h3>Nombre : ${autosCarrito.nombre}</h3>
        <h3>Caracteristicas : ${autosCarrito.caracteristicas}</h3>
         <p>Precio : ${autosCarrito.precio}</p> `;

        contenedorModal.append(MicarritoAutos);

        const totalCarrito = miCarritoVacio.reduce((acumulador, precioAuto) => acumulador + precioAuto.precio, 0);
        const totalEnUnDiv = document.createElement("div");
        totalEnUnDiv.className = "totalEnUnDiv";
        totalEnUnDiv.innerHTML = `Total a pagar : ${totalCarrito}`;
        contenedorModal.append(totalEnUnDiv)
    })


})


