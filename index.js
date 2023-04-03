const usuariosEnLinea = JSON.parse(localStorage.getItem("usuarioEnLinea")) || false

if (!usuariosEnLinea) {
    window.location.href = "login.html"
}

const logout = document.getElementById("Salir")
logout.addEventListener("click", () => {
    alert("Hasta pronto")
    localStorage.removeItem("usuarioEnLinea")
    window.location.href = "login.html"
})


// ShopTopCar //

const contenedorGeneralDeAutos = document.getElementById("contenedorGeneralDeAutos")

const listaAutos = [
    {
        id: 1,
        nombre: "Ford Ka 1.5 Se 5 p",
        caracteristicas: "2019 • 89.085 km • Automática",
        Precio: 4560000,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_931853-MLA54747004682_032023-F.webp",

    },
    {
        id: 2,
        nombre: "Chevrolet Cruze II 1.4 Sedan At Ltz",
        caracteristicas: "2021 • 50.712 km • Manual",
        Precio: 5750000,
        img: "https://http2.mlstatic.com/D_NQ_NP_664602-MLA54743981637_032023-O.webp",

    },
    {
        id: 3,
        nombre: "Peugeot 408 1.6 Feline Hdi 115cv",
        caracteristicas: "2013 • 89.111 km • Manual",
        Precio: 3430000,
        img: "https://http2.mlstatic.com/D_NQ_NP_650735-MLA53002797586_122022-O.webp",

    },
    {
        id: 4,
        nombre: "Toyota Etios 1.5 Platinum 4 p AT L/17",
        caracteristicas: "2017 • 63.538 km • Automática",
        Precio: 4370000,
        img: "https://http2.mlstatic.com/D_NQ_NP_857019-MLA54736514579_032023-O.webp",

    },

]

listaAutos.forEach((autosEnVenta) => {
    let contenedorAutos = document.createElement("div");
    contenedorAutos.innerHTML = `
    <img src="${autosEnVenta.img}">
    <h3>Nombre : ${autosEnVenta.nombre}</h3>
    <h3>Caracteristicas : ${autosEnVenta.caracteristicas}</h3>
    <h3>Precio : ${autosEnVenta.Precio}</h3>
    `;
    contenedorGeneralDeAutos.append(contenedorAutos)

    let botonComprar = document.createElement("button");
    botonComprar.innerText = "Comprar"
    contenedorAutos.append(botonComprar)
})