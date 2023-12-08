// Validações e mascaras do formulario

function mask_cpf() {
    const cpf = document.getElementById('cpf');
    const valor = cpf.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (valor.length <= 10) {
        cpf.classList.add('invalid-input');
        if (valor.length <= 3) {
            cpf.value = valor;
        } else if (valor.length <= 6) {
            cpf.value = valor.substring(0, 3) + '.' + valor.substring(3);
        } else if (valor.length <= 9) {
            cpf.value = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6);
        }
    }
    else {
        valor.length <= 11
        cpf.value = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6, 9) + '-' + valor.substring(9);

        cpf.classList.remove('invalid-input');
    }
}

function mask_phone() {
    const telefone = document.getElementById('phone');
    const valor = telefone.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (valor.length <= 10) {
        telefone.classList.add('invalid-input');
        telefone.value = valor.replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');

    } else {
        telefone.value = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
        telefone.classList.remove('invalid-input');

    }

}

function validationName() {

    // Validação do campo Nome
    const nameInput = document.getElementById('name');

    const nameValue = nameInput.value;
    const nameRegex = /^[A-z ]{4,100}/;

    if (!nameRegex.test(nameValue)) {
        nameInput.classList.add('invalid-input');

        return false;
    } else {
        nameInput.classList.remove('invalid-input');

    }
}

function validationPassword() {
    const passwordInput = document.getElementById('password');

    const passwordValue = passwordInput.value;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordregex.test(passwordValue)) {
        passwordInput.classList.add('invalid-input');

        return false;
    } else {
        passwordInput.classList.remove('invalid-input');

    }

}

function validationPasswordd() {
    const passwordInput = document.getElementById('confirmPassword');

    const passwordValue = passwordInput.value;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordregex.test(passwordValue)) {
        passwordInput.classList.add('invalid-input');

        return false;
    } else {
        passwordInput.classList.remove('invalid-input');

    }

}

// Armazenado dados do Cliente no LocalStorage

document.addEventListener("DOMContentLoaded", function () {
    var cadForm = document.getElementById("form-register");

    cadForm.addEventListener("submit", function (e) {
        // Método para não recarregar a página
        e.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var cpf = document.getElementById("cpf").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var passwordConfirm = document.getElementById("confirmPassword").value;

        // Verificar se o CPF já existe no localStorage
        if (cpfAlreadyRegistered(cpf)) {
            alert("CPF já cadastrado. Por favor, insira um CPF diferente.");
            return;
        }

        if (passwordConfirm != password) {
            alert("O Campo Repita sua senha deve ser igual ao campo senha.");
            return;
        } else {

            // Criar um novo objeto cliente
            var newClient = {
                name: name,
                email: email,
                cpf: cpf,
                phone: phone,
                password: password,
                passwordConfirm: passwordConfirm
            };

            // Armazenar o novo cliente no localStorage
            registerNewClient(newClient);

            alert("Cliente cadastrado com sucesso!");

        }

    });
});

// Função para verificar se o CPF já está cadastrado
function cpfAlreadyRegistered(cpf) {
    // Obter clientes do localStorage (se existirem)
    var customers = JSON.parse(localStorage.getItem("customers")) || [];

    // Verificar se o CPF já existe na lista de clientes
    return customers.some(function (customer) {
        return customer.cpf === cpf;
    });
}

// Função para cadastrar um novo cliente no localStorage
function registerNewClient(customer) {
    // Obter clientes do localStorage (se existirem)
    var customers = JSON.parse(localStorage.getItem("customers")) || [];

    // Adicionar o novo cliente à lista de clientes
    customers.push(customer);

    // Atualizar o localStorage com a lista de clientes atualizada
    localStorage.setItem("customers", JSON.stringify(customers));
}
