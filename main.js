const form= document.getElementById('cadastro');
const contatos = [];
const telefone = [];

let linhas = ''; 

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    });

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('numero-telefone');

    if (contatos.includes(inputNomeContato.value)){
        alert(`A atividade: ${inputNomeContato.value} já foi inserida`);
    } else {
        contatos.push(inputNomeContato.value);
        telefone.push(inputTelefone.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '<tr>';
    
        linhas += linha
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

