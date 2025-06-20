console.log("modal.js cargado correctamente");

const btnModal1 = document.getElementById("btn-ficha-seccion1");
function showModal1() {
    const modal1 = document.getElementById("modal-seccion1");
    modal1.classList.remove("hidden");
}

btnModal1.addEventListener("click", showModal1);