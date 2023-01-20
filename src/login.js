function verificaLogin(){
// Obtem o formulário de login
var form = document.getElementById("login-form");
      
// Adiciona um evento de submit ao formulário
form.addEventListener("submit", function(event) {
  // Pega os valores dos campos de e-mail e senha
  var email = form.elements.email.value;
  var password = form.elements.password.value;
  
  // Valida os valores dos campos
  if (!email) {
    alert("Por favor, insira um endereço de e-mail válido.");
    event.preventDefault();
  }
  if (!password) {
    alert("Por favor, insira uma senha.");
    event.preventDefault();
  }
});
}