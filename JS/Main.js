//Configurando o botão de login
document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("btn-login");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    pegarDados();
  });

  function pegarDados() {
    var usuario = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    //preencher a logica apos obter o login e a senha, pode ser usado
    //php, fica a seu critério!
  }
});


//========================================
//configurando os link's
//========================================

document.addEventListener("DOMContentLoaded", function () {
  var registerLink = document.querySelector(".link-esqueceu-senha  a");
  registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    //aqui você pode utilizar um window.location.href = 'link para tela de recuperação
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var registerLink = document.querySelector(".link-cadastrar-usuario  a");
  registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    //aqui você pode utilizar um window.location.href = 'link para tela de cadastro
  });
});
