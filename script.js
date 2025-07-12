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

  // Efecto parpadeo suave en los iconos al pasar el cursor
  document.querySelectorAll('.skill i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.animation = 'glow 1s ease-in-out infinite alternate';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.animation = 'none';
    });
  });

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

// Efecto parpadeo suave en los iconos al pasar el cursor
document.querySelectorAll('.skill i').forEach(icon => {
icon.addEventListener('mouseenter', () => {
    icon.style.animation = 'glow 1s ease-in-out infinite alternate';
});
icon.addEventListener('mouseleave', () => {
    icon.style.animation = 'none';
});
});