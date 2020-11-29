var receita = document.getElementById('receita');
var alternativo = document.getElementById('alternativo');

function TesteDeCoragem() {
    Limpa();
    setTimeout(() => Segredo(), 1);
}

function Segredo() {
    console.log('Estou aqui!');

    var resposta = confirm('Você quer realmente saber o segredo?');

    if (resposta) {
        receita.style.display = 'block';

    } else {
        alternativo.style.display = 'block';

    }
}

function Limpa() {
    receita.style.display = 'none';
    alternativo.style.display = 'none';
}