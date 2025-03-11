var email = document.getElementById('e-mail');
var passoword = document.getElementById('senha');


function login(event){

   event.preventDefault();

     var valorEmail = email.value;
     var valorSenha = passoword.value;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailRegex.test(valorEmail)){

        alert('email invalido! Por favor, tente novamente.');

        return false;

    }

    if(valorSenha.length < 6){

        alert("Senha muita fraca! Por gentileza, fortifique-a.");
        return false;

    }

    alert("Login efetuado com sucesso!");

}

var formulario = document.GetElementById('LoginForm');
formulario.onsubmit = login;