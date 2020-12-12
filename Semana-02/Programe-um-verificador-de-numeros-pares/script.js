function verificaNumero() {
    let resultado;
    const valor = document.getElementById('entrada').value;
    console.log(valor);
    console.log(valor % 2);
    if (valor % 2 == 0) {
        resultado = 'par';
    } else {
        resultado = 'ímpar';
    }
    document.getElementById('resultado').textContent = `O número digitado é ${resultado}.`;

}