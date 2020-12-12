function soma() {
    const num1 = parseFloat(document.getElementById("valor1").value);
    const num2 = parseFloat(document.getElementById("valor2").value);
    const resultado = num1 + num2;
    document.getElementById('resultado').value = resultado;
}

function subtracao() {
    const num1 = parseFloat(document.getElementById("valor1").value);
    const num2 = parseFloat(document.getElementById("valor2").value);
    const resultado = num1 - num2;
    document.getElementById('resultado').value = resultado;
}

function multiplicacao() {
    const num1 = parseFloat(document.getElementById("valor1").value);
    const num2 = parseFloat(document.getElementById("valor2").value);
    const resultado = num1 * num2;
    document.getElementById('resultado').value = resultado;
}

function divisao() {
    const num1 = parseFloat(document.getElementById("valor1").value);
    const num2 = parseFloat(document.getElementById("valor2").value);
    if (num2 != 0) {
        const resultado = num1 / num2;
        document.getElementById('resultado').value = resultado;
    }
    else {
        document.getElementById('resultado').value = "erro: divisão por zero.";
    }
}