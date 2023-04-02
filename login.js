const formIngresar = document.getElementById("formIngresar")
formIngresar.addEventListener("submit", (Event) => {
    Event.preventDefault()
    console.log("Formulario Valido")
    const emailCliente = document.getElementById("emailCliente").value
    const passCliente = document.getElementById("passCliente").value


    const nuevosClientes = JSON.parse(localStorage.getItem("nuevosClientesRegistrados")) || []

    const validarUsuario = nuevosClientes.find(usuarios => usuarios.emailCliente === emailCliente && usuarios.passCliente === passCliente)

    if (!validarUsuario) {
        return alert("usuario y/o contraseña incorrecto")

    }

    else {
        alert("bienvenido " + validarUsuario.nombreCliente)
        window.location.replace("index.html");
    }


})
