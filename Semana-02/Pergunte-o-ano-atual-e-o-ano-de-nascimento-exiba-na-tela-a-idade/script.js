function Questionario() {
    let idade;
    const anoNascimento = parseInt(prompt("Qual o ano em que nasceu (aaaa) ?"));
    const anoAtual = parseInt(prompt("Em que ano estamos (aaaa)?"));
    idade = anoAtual - anoNascimento;  
    
    alert(`Sua idade é: ${idade} anos.`);
}