function Questionario() {
    var sobreNome = prompt("Qual o seu último sobrenome?");    
    var tamanho = sobreNome.length;
    alert("Olá, " + sobreNome.toUpperCase() + ". Seu sobrenome contém " + tamanho + " letras.");
}