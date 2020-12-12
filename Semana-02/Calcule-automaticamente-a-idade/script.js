function Questionario() {
    let idade;
    const anoNascimento = parseInt(prompt("Qual o ano em que nasceu (aaaa) ?"));
    const dataAtual = new Date();        
    idade = dataAtual.getFullYear() - anoNascimento;    
    alert(`Sua idade é: ${idade} anos.`);
}