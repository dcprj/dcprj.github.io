const btnPA = document.getElementById('btn-Pa');
const btnPG = document.getElementById('btn-Pg');

btnPA.addEventListener('click', calculaPA);
btnPG.addEventListener('click', calculaPG);

function calculaPA() {     

    let valorInicial = document.getElementById('valor-inicial').value;
    let raiz = document.getElementById('valor-raiz').value;
    let resultado = null;

    if (valorInicial.length == 0 || raiz.length == 0) {
        alert("Não podem haver valores em branco.")
    }

    else {
        valorInicial = parseFloat(valorInicial);
        raiz = parseFloat(raiz);
        resultado = `Valor inicial = ${valorInicial}; raiz = ${raiz}; P.A. = ${valorInicial}`;
        let progressao = parseFloat(valorInicial);
        for (i=1; i<=9; i++){
            progressao += raiz ;            
            resultado = resultado + ", " +  progressao;
        }
        resultado += '.'
    }

    const pResultado = document.createElement('p');
    pResultado.textContent=resultado;
    document.getElementById('resultado').appendChild(pResultado);
}

function calculaPG() {

    let valorInicial = document.getElementById('valor-inicial').value;
    let raiz = document.getElementById('valor-raiz').value;
    let resultado = null;

    if (valorInicial.length == 0 || raiz.length == 0) {
        alert("Não podem haver valores em branco.")
    }

    else {
        valorInicial = parseFloat(valorInicial);
        raiz = parseFloat(raiz);
        resultado = `Valor inicial = ${valorInicial}; raiz = ${raiz}; P.G. = ${valorInicial}`;
        let progressao = parseFloat(valorInicial);
        for (i=1; i<=9; i++){
            progressao *= raiz ;            
            resultado = resultado + ", " +  progressao;
        }
        resultado += '.'
    }

    const pResultado = document.createElement('p');
    pResultado.textContent=resultado;
    document.getElementById('resultado').appendChild(pResultado);

}