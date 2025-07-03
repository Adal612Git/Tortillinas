document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const nameErr = document.getElementById('name-error');
  const emailErr = document.getElementById('email-error');
  const phoneErr = document.getElementById('phone-error');

  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/;

  function validateName() {
    if (name.value.trim() === '') {
      nameErr.textContent = 'Ingresa tu nombre';
      return false;
    }
    nameErr.textContent = '';
    return true;
  }

  function validateEmail() {
    if (!emailRegex.test(email.value)) {
      emailErr.textContent = 'Email inválido';
      return false;
    }
    emailErr.textContent = '';
    return true;
  }

  function validatePhone() {
    if (!phoneRegex.test(phone.value)) {
      phoneErr.textContent = 'Teléfono inválido';
      return false;
    }
    phoneErr.textContent = '';
    return true;
  }

  name.addEventListener('input', validateName);
  email.addEventListener('input', validateEmail);
  phone.addEventListener('input', validatePhone);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = validateName() & validateEmail() & validatePhone();
    if (ok) {
      alert('Formulario enviado');
      form.reset();
    }
  });
});
