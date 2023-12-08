var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
var tiposClientes = JSON.parse(localStorage.getItem('tiposClientes')) || [];

function incluirCliente() {
    // Código para incluir cliente

 
    var tipoCliente = document.getElementById('tipoClienteSelect').value;
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var cidade = document.getElementById('Cidade').value;
    var cep = document.getElementById('Cep').value;
    var endereco = document.getElementById('endereco').value;

    if (!tipoCliente || !nome || !sobrenome || !dataNascimento || !cidade || !cep || !endereco) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    var cliente = {
        tipoCliente: tipoCliente,
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        cidade: cidade,
        cep: cep,
        endereco: endereco
    };

    clientes.push(cliente);
    tiposClientes.push(tipoCliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));
    localStorage.setItem('tiposClientes', JSON.stringify(Array.from(new Set(tiposClientes))));

    console.log('Clientes:', clientes);

    limparCampos();
    listarClientes();


}

function limparCampos() {
 // Código para limpar campos
 document.getElementById('tipoClienteSelect').selectedIndex = 0;
 document.getElementById('nome').value = '';
 document.getElementById('sobrenome').value = '';
 document.getElementById('dataNascimento').value = '';
 document.getElementById('Cidade').value = '';
 document.getElementById('Cep').value = '';
 document.getElementById('endereco').value = '';

 // Limpar a lista de clientes
 document.getElementById('listaClientes').innerHTML = '';  
}


function listarClientes() {
// Código para listar clientes
var listaClientesHtml = '<h2>Lista de Clientes</h2>';

if (clientes.length === 0) {
    listaClientesHtml += '<p>Não há clientes para listar.</p>';
} else {
    listaClientesHtml += '<ul>';
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var tipoCliente = tiposClientes[i];

        listaClientesHtml += '<li>';
        listaClientesHtml += '<strong>Tipo de Cliente:</strong> ' + tipoCliente + '<br>';
        listaClientesHtml += '<strong>Nome:</strong> ' + cliente.nome + '<br>';
        listaClientesHtml += '<strong>Sobrenome:</strong> ' + cliente.sobrenome + '<br>';
        listaClientesHtml += '<strong>Data de Nascimento:</strong> ' + cliente.dataNascimento + '<br>';
        listaClientesHtml += '<strong>Cidade:</strong> ' + cliente.cidade + '<br>';
        listaClientesHtml += '<strong>CEP:</strong> ' + cliente.cep + '<br>';
        listaClientesHtml += '<strong>Endereço:</strong> ' + cliente.endereco;
        listaClientesHtml += '</li>';
    }
    listaClientesHtml += '</ul>';
}

document.getElementById('listaClientes').innerHTML = listaClientesHtml;



}

function preencherEndereco() {
 // Código para preencher endereço
 var cep = document.getElementById('Cep').value;

            if (cep.length !== 8 || isNaN(cep)) {
                alert('Por favor, insira um CEP válido.');
                return;
            }

            var url = 'https://viacep.com.br/ws/' + cep + '/json/';

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição.');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.erro) {
                        alert('CEP não encontrado.');
                    } else {
                        document.getElementById('endereco').value = data.logradouro || '';
                        document.getElementById('Cidade').value = data.localidade || '';
                    }
                })
                .catch(error => {
                    console.error('Erro na requisição:', error.message);
                    alert('Erro ao obter dados do endereço.');
                });
}

function excluirClientes() {
    // Código para excluir todos os clientes
  // Limpar os arrays de clientes e tiposClientes
  clientes = [];
  tiposClientes = [];

  // Atualizar o localStorage
  localStorage.setItem('clientes', JSON.stringify(clientes));
  localStorage.setItem('tiposClientes', JSON.stringify(tiposClientes));

  // Limpar a lista de clientes
  document.getElementById('listaClientes').innerHTML = '<p>Não há clientes para listar.</p>';

// Ao carregar a página, não chamar listarClientes diretamente

}
