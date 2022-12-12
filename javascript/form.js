/*mudança na mensagem que aparece nos campos para preencher no formulario*/
function InvalidName(textbox) {
  if (textbox.value === "") {
    textbox.setCustomValidity("Please enter your name");
  } else {
    textbox.setCustomValidity("");
  }

  return true;
}
/*necessario um email valido*/
function InvalidEmail(textbox) {
  if (textbox.value === "") {
    textbox.setCustomValidity("Please enter your email address");
  } else if (textbox.validity.typeMismatch) {
    textbox.setCustomValidity("Please enter a valid email address");
  } else {
    textbox.setCustomValidity("");
  }

  return true;
}
/*necessario um numero de telefone valido*/
function InvalidPhone(textbox) {
  if (textbox.value === "") {
    textbox.setCustomValidity("Please enter your phone number");
  } else {
    textbox.setCustomValidity("");
  }

  return true;
}
document.getElementById("formulario").onsubmit = function (e) {
  e.preventDefault();
};


/* menu responsivo */
let menu  = document.querySelector("#icone-menu");
let barraNav = document.querySelector(".nav");

menu.addEventListener("click", function () {
    barraNav.classList.toggle("active");
});

window.onscroll = () => {
    barraNav.classList.remove("active");
}