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