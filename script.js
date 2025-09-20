document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA LA BARRA DE CTA FIJA (STICKY) ---
    const stickyBar = document.getElementById('sticky-cta-bar');
    const heroSection = document.querySelector('.hero');

    if (stickyBar && heroSection) {
        window.addEventListener('scroll', function() {
            // Muestra la barra cuando el usuario ha bajado más allá de la sección del héroe
            if (window.scrollY > heroSection.offsetHeight) {
                stickyBar.classList.add('visible');
            } else {
                stickyBar.classList.remove('visible');
            }
        });
    }


    // --- LÓGICA PARA ANIMAR ELEMENTOS AL HACER SCROLL ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Opcional: deja de observar el elemento una vez que es visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // El elemento se activa cuando es visible en un 10%
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
