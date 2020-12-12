const agora = new Date;
const hora = agora.toLocaleTimeString('pt-BR');
document.getElementById('time').textContent = hora;