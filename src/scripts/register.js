// Manejo del formulario
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    // e.preventDefault(); // Elimina o comenta esta línea

    // Puedes dejar solo los efectos visuales si quieres,
    // pero NO bloquees el envío del formulario.
});

// Efecto de escritura en el título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efectos cuando carga la página
window.addEventListener('load', function() {
    // Pequeño delay para que se vea la animación
    setTimeout(() => {
        const title = document.querySelector('.title');
        typeWriter(title, 'Registro', 150);
    }, 800);
});

// Efecto de paralaje suave en las partículas
document.addEventListener('mousemove', function(e) {
    const particles = document.querySelectorAll('.particle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});