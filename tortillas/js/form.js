/**
 * Form validation handlers using Bootstrap classes.
 * @module form
 */
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
      name.classList.remove('is-valid');
      name.classList.add('is-invalid');
      nameErr.textContent = 'Ingresa tu nombre';
      return false;
    }
    name.classList.remove('is-invalid');
    name.classList.add('is-valid');
    nameErr.textContent = '';
    return true;
  }

  function validateEmail() {
    if (!emailRegex.test(email.value)) {
      email.classList.remove('is-valid');
      email.classList.add('is-invalid');
      emailErr.textContent = 'Email inválido';
      return false;
    }
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    emailErr.textContent = '';
    return true;
  }

  function validatePhone() {
    if (!phoneRegex.test(phone.value)) {
      phone.classList.remove('is-valid');
      phone.classList.add('is-invalid');
      phoneErr.textContent = 'Teléfono inválido';
      return false;
    }
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
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
