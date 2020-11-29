function Questionario() {
    var nome = prompt("Qual o seu nome?");
    var idade = parseInt(prompt("Qual a sua idade?"));
    var esporte = confirm("Você gosta de praticar esportes? (Ok = Sim / Cancelar = Não)")
        
    console.log("Nome = " + nome);
    console.log("Idade = " + idade);
    console.log("Gosta de esportes = " + esporte);
    
    alert("Obrigado pelas respostas.")
}