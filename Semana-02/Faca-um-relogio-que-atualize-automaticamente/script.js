function atualizaHora() {    
    mostraHora();
    setInterval(() => {
        mostraHora();
    }, 1000);
}

function mostraHora(){
    const agora = new Date;
    const hora = agora.toLocaleTimeString('pt-BR');
    document.getElementById('time').textContent = hora;
}