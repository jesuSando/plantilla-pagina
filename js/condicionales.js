const seccion2 = document.getElementById('seccion2');
const body = document.body;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando la sección 2 está visible
            body.classList.add('section2-active');
            navbar.style.backgroundColor = 'var(--burdeo)';
        } else {
            // Cuando la sección 2 no está visible
            body.classList.remove('section2-active');
            navbar.style.backgroundColor = 'var(--rosado-claro)';
        }
    });
}, {
    threshold: 0.5 // Ajusta este valor según necesites (0.5 = 50% de visibilidad)
});

observer.observe(seccion2);


let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Oculta el navbar al hacer scroll hacia abajo (y no en la parte superior)
    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.classList.add('escondido');
    } 
    // Muestra el navbar al hacer scroll hacia arriba
    else if (currentScroll < lastScroll) {
        navbar.classList.remove('escondido');
    }

    lastScroll = currentScroll;
});