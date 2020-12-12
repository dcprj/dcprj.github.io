
// const agora = new Date(2020,6,19);
const agora = new Date();
const hoje = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full' }).format(agora);

const mes = agora.getMonth() + 1;
const dia = agora.getDate();

//atualizada o dia na tag H1
window.addEventListener('load', function () {
    document.getElementById('h1-data').textContent = `Hoje é ${hoje}.`;
});

if ((mes == 3 && dia >= 20) || (mes == 6 && dia <= 20) || (mes == 4 || mes == 5)) {
    setaEstacao('Outono', '20 de março', '20 de junho');
}
else if ((mes == 6 && dia >= 21) || (mes == 9 && dia <= 23) || (mes == 7 || mes == 8)) {
    setaEstacao('Inverno', '21 de junho', '23 de setembro');
}
else if ((mes == 9 && dia >= 24) || (mes == 12 && dia <= 22) || (mes == 10 || mes == 11)) {
    setaEstacao('Primavera', '24 de setembro', '22 de dezembro');
}
else {
    setaEstacao('Verão', '23 de dezembro', '19 de março');
}

function setaEstacao(estacao, dataInicio, dataFinal) {

    console.log(estacao);
    console.log(dataInicio);
    console.log(dataFinal);

    const preposicao = estacao == 'Primavera' ? 'na' : 'no';

    const pEstacao = document.createElement('p');
    pEstacao.textContent = `Estamos ${preposicao} ${estacao}!`;

    const pPeriodo = document.createElement('p');
    pPeriodo.textContent = `Esta estação iniciou-se no dia ${dataInicio} e vai até o dia ${dataFinal}.`;

    const pai = document.getElementById('div-conteudo');

    pai.appendChild(pEstacao);
    pai.appendChild(pPeriodo);

    document.body.style.backgroundImage = `url(imagens/${estacao.replace("ã", "a")}.jpg)`;

}






