function PedeNome() {
    var nome = prompt("Qual o seu nome?");
    if (nome == null) {
        alert("Não seja envergonhado(a). Diga o seu nome :-)");
    } else {
        alert("Olá " + nome + " muito prazer em conhecê-lo(a).");
    }
}