// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});

// Smooth scroll function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    navMenu.classList.remove('active');
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnToggle = navToggle.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// Form submission handler
async function handleSubmit() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;
  const messageDiv = document.getElementById('formMessage');

  // Basic validation
  if (!nombre || !correo || !mensaje) {
    messageDiv.innerHTML = '<div class="form-message error">Por favor completa todos los campos</div>';
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    messageDiv.innerHTML = '<div class="form-message error">Por favor ingresa un correo válido</div>';
    return;
  }

  // Create form data
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('correo', correo);
  formData.append('mensaje', mensaje);
  formData.append('_captcha', 'false');
  formData.append('_template', 'table');

  try {
    messageDiv.innerHTML = '<div class="form-message">Enviando...</div>';
    
    const response = await fetch('https://formsubmit.co/jeancarlopinilla8@gmail.com', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      messageDiv.innerHTML = '<div class="form-message success">¡Mensaje enviado con éxito! Te contactaré pronto.</div>';
      // Clear form
      document.getElementById('nombre').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('mensaje').value = '';
    } else {
      messageDiv.innerHTML = '<div class="form-message error">Error al enviar el mensaje. Por favor intenta de nuevo.</div>';
    }
  } catch (error) {
    messageDiv.innerHTML = '<div class="form-message error">Error de conexión. Por favor intenta más tarde.</div>';
  }
}

// Add Enter key support for form
document.getElementById('mensaje').addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && event.ctrlKey) {
    handleSubmit();
  }
});