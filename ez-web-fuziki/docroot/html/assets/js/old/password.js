const reg_eyes = document.querySelectorAll(".eye");

reg_eyes.forEach((eye) => {
  eye.addEventListener("click", () => {
    const pass_field = eye.previousElementSibling.previousElementSibling;
    if (pass_field.type === "password") {
      pass_field.setAttribute("type", "text");
      eye.classList.replace("eye-icon-hide", "eye-icon-show");
    } else {
      pass_field.setAttribute("type", "password");
      eye.classList.replace("eye-icon-show", "eye-icon-hide");
    }
  });
});
