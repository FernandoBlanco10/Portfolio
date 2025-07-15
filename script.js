  // Animación suave al hacer scroll a las secciones
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("show");
  });
});

// Efecto parpadeo suave en los iconos al pasar el cursor
document.querySelectorAll('.skill i').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
      icon.style.animation = 'glow 1s ease-in-out infinite alternate';
  });
  icon.addEventListener('mouseleave', () => {
      icon.style.animation = 'none';
  });
});

//**************************************************************
// Menu toggle para pantallas pequeñas
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}
//**************************************************************