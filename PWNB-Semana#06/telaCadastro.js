
function mascara_cpf() {
    const cpf = document.getElementById('cpf');
    const valor = cpf.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (valor.length <= 3) {
        cpf.value = valor;
    } else if (valor.length <= 6) {
        cpf.value = valor.substring(0, 3) + '.' + valor.substring(3);
    } else if (valor.length <= 9) {
        cpf.value = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6);
    } else if (valor.length <= 12) {
        cpf.value = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6, 9) + '-' + valor.substring(9);
    } 
}

function mascara_telefone() {
    const telefone = document.getElementById('tel');
    const valor = telefone.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (valor.length <= 10) {
        telefone.value = valor.replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
    } else {
        telefone.value = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
    }
}

