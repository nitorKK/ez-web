  const id = document.forms['form']['id'];
  const password = document.forms['form']['password'];

  const id_error = document.querySelector('.id_error');
  const pass_error = document.querySelector('.pass_error');
  const error = document.querySelector('.error');
  const eye = document.querySelector('.eye');
  
  id.addEventListener('textInput', id_Verify);
  password.addEventListener('textInput', pass_Verify);
  
  function validated(){
    if (id.value.length < 9) {
      id.classList.add("c-form-control-error");
 /*      id.style.border = "1px solid var(--red)"; */
      id_error.style.display = "block";
      error.style.display = "block";
      id.focus();
      return false;
    }
    if (password.value.length < 6) {
      password.classList.add("c-form-control-error");
/*       password.style.border = "1px solid var(--red)"; */
      pass_error.style.display = "block";
      error.style.display = "block";
      eye.classList.add("error-eye");
      password.focus();
      return false;
    }
  
  }
  function id_Verify(){
    if (id.value.length >= 8) {
      id.classList.remove("c-form-control-error");
/*       id.style.border = "1px solid silver"; */
      id_error.style.display = "none";
      error.style.display = "none";
      return true;
    }
  }
  function pass_Verify(){
    if (password.value.length >= 5) {
      password.classList.remove("c-form-control-error");
/*       password.style.border = "1px solid silver"; */
      pass_error.style.display = "none";
      error.style.display = "none";
      eye.classList.remove("error-eye");
      return true;
    }
  }
  