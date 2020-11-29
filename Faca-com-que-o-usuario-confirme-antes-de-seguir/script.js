var receita = document.getElementById('receita');
var alternativo = document.getElementById('alternativo');

function TesteDeCoragem() {
    Limpa(); // tava um console.log aqui, por isso não tava chamando
    setTimeout(() => Segredo(), 1); /* botei com 1 milissegundo de atraso pra
    só acontecer depois que limpou a tela, se não a tela de confirmação 
    acaba acontecendo antes de atualizar a tela */
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
    return 'limpo';
}