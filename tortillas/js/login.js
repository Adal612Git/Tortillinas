/**
 * Manejo de login y simulación de base de datos de usuarios.
 * Guarda usuario activo en localStorage.
 * @module login
 */
(function(){
  const defaultUsers = [
    {email:'admin@demo.com', pass:'admin123', role:'admin', redirect:'admin.html'},
    {email:'cajero@demo.com', pass:'cajero123', role:'cajero', redirect:'cajero.html'},
    {email:'repartidor@demo.com', pass:'repart123', role:'repartidor', redirect:'repartidor.html'},
    {email:'cliente@demo.com', pass:'cliente123', role:'cliente', redirect:'perfil.html'}
  ];
  if(!localStorage.getItem('users'))
    localStorage.setItem('users', JSON.stringify(defaultUsers));

  const form = document.getElementById('login-form');
  if(!form) return;
  const email = document.getElementById('login-email');
  const pass = document.getElementById('login-pass');
  const emailErr = document.getElementById('login-email-error');
  const passErr = document.getElementById('login-pass-error');

  function validate(){
    let ok = true;
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email.value)){
      email.classList.add('is-invalid');
      emailErr.textContent='Email inválido';
      ok=false;
    }else{
      email.classList.remove('is-invalid');
      emailErr.textContent='';
    }
    if(pass.value.length<6){
      pass.classList.add('is-invalid');
      passErr.textContent='Mínimo 6 caracteres';
      ok=false;
    }else{
      pass.classList.remove('is-invalid');
      passErr.textContent='';
    }
    return ok;
  }

  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validate()) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u=>u.email===email.value && u.pass===pass.value);
    if(user){
      localStorage.setItem('activeUser', JSON.stringify(user));
      window.location.href = user.redirect;
    }else{
      pass.classList.add('is-invalid');
      passErr.textContent='Credenciales incorrectas';
    }
  });
})();
