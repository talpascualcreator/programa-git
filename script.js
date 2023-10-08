const title = document.querySelector("h1");
let translateXValue = 0;
let direction = 1;

setInterval(function() {
  translateXValue += direction * 10;
  title.style.transform = `translateX(${translateXValue}px)`;

  if (translateXValue > 20 || translateXValue < -20) {
    direction *= -1;
  }
}, 500);

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginPassword = document.getElementById("login-password");
    
  
   
    
  
    const forgotPasswordLink = document.querySelector(".forgot-password");
    forgotPasswordLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Se te redirigirá para cambiar la contraseña");
      
    });
    
  
});
const submitButton = document.getElementById("submit-button");
  const form = document.getElementById("registration-form");

  submitButton.addEventListener("click", function (event) {
    const inputs = form.querySelectorAll(".input-field");
    let allFieldsFilled = true;

    inputs.forEach(input => {
      if (!input.value) {
        allFieldsFilled = false;
      }
    });

    if (allFieldsFilled) {
      // Mostrar mensaje y redirigir después de aceptar
      alert("Inscrito satisfactoriamente");
      window.location.href = "iniciosesion.html"; // Redirige a iniciosesion.html
    } else {
      event.preventDefault();
      alert("Por favor, completa todos los campos.");
    }
  });

  
  


    
  
  
  
  
  