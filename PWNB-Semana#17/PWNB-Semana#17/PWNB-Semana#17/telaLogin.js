function checkLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Obter clientes do localStorage (se existirem)
    var customers = JSON.parse(localStorage.getItem("customers")) || [];

    // Verificar se o email e senha existem na lista de clientes
    var loginSucesso = customers.some(function (customer) {
        return customer.email === email && customer.password === password;
    });

    if (loginSucesso) {
        alert("Login realizado com sucesso");
        window.location.href = "telaInicial.html";  // Redireciona para a página desejada

    } else {
        window.location.reload();  // Recarrega a página
        alert("Erro ao realizar login, tente novamente");

    }
}
