/**
 * Manejo de registro de usuarios.
 * Almacena nuevos usuarios en localStorage y redirige a login.
 * @module register
 */
(function(){
  const form = document.getElementById('register-form');
  if(!form) return;
  const email = document.getElementById('reg-email');
  const pass = document.getElementById('reg-pass');
  const role = document.getElementById('reg-role');
  const emailErr = document.getElementById('reg-email-error');
  const passErr = document.getElementById('reg-pass-error');
  const roleErr = document.getElementById('reg-role-error');

  function validate(){
    let ok=true;
    const emailRegex=/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
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
    if(!role.value){
      role.classList.add('is-invalid');
      roleErr.style.display='block';
      ok=false;
    }else{
      role.classList.remove('is-invalid');
      roleErr.style.display='none';
    }
    return ok;
  }

  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validate()) return;
    const users=JSON.parse(localStorage.getItem('users'))||[];
    const redirects={
      admin:'admin.html',
      cajero:'cajero.html',
      repartidor:'repartidor.html',
      cliente:'perfil.html'
    };
    users.push({email:email.value, pass:pass.value, role:role.value, redirect:redirects[role.value]});
    localStorage.setItem('users', JSON.stringify(users));
    alert('Usuario registrado. Inicia sesión.');
    window.location.href='login.html';
  });
})();
