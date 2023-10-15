function Entrar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    let nome = "lucas@gmail.com";

    if (email == nome && senha == 1234567){
        alert("Ola, Lucas");
    } else {
        alert("Seu login falhou")
    }
}

const campos = document.querySelectorAll('.required');

function setError(index){
    campos[index].style.border = '2px solid #e63636';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    } else {
        alert("Seu login falhou")
    }
}