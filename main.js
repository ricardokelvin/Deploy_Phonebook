const form = document.getElementById('formulario')
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
});

function adicionaLinha () {

    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    nome.push(nomeContato.value);
    numero.push(parseFloat(numeroContato.value));

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td><a href="tel: ${numeroContato.value}" title="Numero">${numeroContato.value}</a></td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    nomeContato.value = '';
    numeroContato.value = '';
}
/*
function adicionaNumero () {
    document.
}

function adicionaNome () {

}

 */