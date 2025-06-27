console.log("Funciones.js cargado correctamente");


//-----------------------------------------------------------seccion1-----------------------------------------------------------

const btnSeeMore1 = document.getElementById("btn-mas-seccion1");
function toggleText1() {
    const texto1 = document.getElementById("texto2-seccion1");  
    if (texto1.classList.contains("hidden")) {
        texto1.classList.remove("hidden");
        btnSeeMore1.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Leer Menos Detalles';
    } else {
        texto1.classList.add("hidden");
        btnSeeMore1.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Leer Más Detalles';
    }
}

btnSeeMore1.addEventListener("click", toggleText1);



//-------------------------------------------modal

const modal = document.getElementById("modal-seccion1");
const openBtn = document.getElementById("btn-ficha-seccion1");
const closeBtn = document.getElementById("close-modal1");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
  console.log("Modal 1 mostrado correctamente");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 300); // espera transición
  console.log("Modal 1 cerrado correctamente");
});

// Cierra al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
});


const modal2 = document.getElementById("modal-seccion2");
const openBtn2 = document.getElementById("btn-mas-seccion2");
const closeBtn2 = document.getElementById("close-modal2");

openBtn2.addEventListener("click", () => {
  modal2.classList.remove("hidden");
  modal2.classList.add("show");
  console.log("Modal 2 mostrado correctamente");
});

closeBtn2.addEventListener("click", () => {
  modal2.classList.remove("show");
  setTimeout(() => modal2.classList.add("hidden"), 300); // espera transición
  console.log("Modal 2 cerrado correctamente");
});

// Cierra al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal.classList.remove("show");
    setTimeout(() => modal2.classList.add("hidden"), 300);
  }
});


//-----------------------------------------------------------seccion3-----------------------------------------------------------

const botonVerMas1 = document.getElementById("3seemore1");
const textoFila1 = document.getElementById("textoFila1Seccion3");
const botonVerMas2 = document.getElementById("3seemore2");
const textoFila2 = document.getElementById("textoFila2Seccion3");
const botonVerMas3 = document.getElementById("3seemore3");
const textoFila3 = document.getElementById("textoFila3Seccion3");
const botonVerMas4 = document.getElementById("3seemore4");
const textoFila4 = document.getElementById("textoFila4Seccion3");
const botonVerMas5 = document.getElementById("3seemore5");
const textoFila5 = document.getElementById("textoFila5Seccion3");
const botonVerMas6 = document.getElementById("3seemore6");
const textoFila6 = document.getElementById("textoFila6Seccion3");

botonVerMas1.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila1.classList.contains("hidden")) {
        textoFila1.classList.remove("hidden");
        botonVerMas1.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila1.classList.add("hidden");
        botonVerMas1.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'
    
    }
});

botonVerMas2.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila2.classList.contains("hidden")) {
        textoFila2.classList.remove("hidden");
        botonVerMas2.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila2.classList.add("hidden");
        botonVerMas2.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'
    
    }
});

botonVerMas3.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila3.classList.contains("hidden")) {
        textoFila3.classList.remove("hidden");
        botonVerMas3.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila3.classList.add("hidden");
        botonVerMas3.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'
    
    }
});

botonVerMas4.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila4.classList.contains("hidden")) {
        textoFila4.classList.remove("hidden");
        botonVerMas4.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila4.classList.add("hidden");
        botonVerMas4.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'
    
    }
});

botonVerMas5.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila5.classList.contains("hidden")) {
        textoFila5.classList.remove("hidden");
        botonVerMas5.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila5.classList.add("hidden");
        botonVerMas5.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'
    
    }
});

botonVerMas6.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila6.classList.contains("hidden")) {
        textoFila6.classList.remove("hidden");
        botonVerMas6.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila6.classList.add("hidden");
        botonVerMas6.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'
    
    }
});

//-----------------------------------------------------------seccion4-----------------------------------------------------------

const botonVerMas7 = document.getElementById("4seemore1");
const textoFila7 = document.getElementById("textoFila1Seccion4");
const cita1 = document.getElementById("cita1");

const botonVerMas8 = document.getElementById("4seemore2");
const textoFila8 = document.getElementById("textoFila2Seccion4");
const cita2 = document.getElementById("cita2");

const botonVerMas9 = document.getElementById("4seemore3");
const textoFila9 = document.getElementById("textoFila3Seccion4");
const cita3 = document.getElementById("cita3");

botonVerMas7.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila7.classList.contains("hidden")) {
        textoFila7.classList.remove("hidden");
        cita1.classList.remove("hidden");
        botonVerMas7.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila7.classList.add("hidden");
        cita1.classList.add("hidden");
        botonVerMas7.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'  
    }
});

botonVerMas8.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila8.classList.contains("hidden")) {
        textoFila8.classList.remove("hidden");
        cita2.classList.remove("hidden");
        botonVerMas8.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila8.classList.add("hidden");
        cita2.classList.add("hidden");
        botonVerMas8.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'  
    }
});

botonVerMas9.addEventListener("click", (e) => {
    e.preventDefault();

    if ( textoFila9.classList.contains("hidden")) {
        textoFila9.classList.remove("hidden");
        cita3.classList.remove("hidden");
        botonVerMas9.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i> Ver Menos'
    } else {
        textoFila9.classList.add("hidden");
        cita3.classList.add("hidden");
        botonVerMas9.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i> Saber Más'  
    }
});



window.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // solo animar una vez
      }
    });
  }, {
    threshold: 0.2
  });

  elementos.forEach(el => observer.observe(el));
  
console.log("Animaciones activadas");
console.log("Elementos detectados:", elementos.length);

});
