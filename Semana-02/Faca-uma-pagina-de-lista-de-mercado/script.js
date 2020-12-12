const btnAdd = document.getElementById('btn-add');
const btnSave = document.getElementById('btn-save');
const btnLoad = document.getElementById('btn-load');
const inpItem = document.getElementById('inp-item-lista');
let arrayLista = [];

btnAdd.addEventListener('click', addItem);
btnSave.addEventListener('click', salvarLista);
btnLoad.addEventListener('click', carregarLista);

inpItem.addEventListener('keypress', (key) => {
    if (key.code == 'Enter') {
        addItem();
    }
});

function addItem() {
    const inpValue = document.getElementById('inp-item-lista').value;
    if (inpValue.length == 0) {
        alert('Digite alguma coisa!')
    } else {
        const option = document.createElement('option');
        option.textContent = inpValue;
        const pai = document.getElementById('itens-da-lista');
        pai.appendChild(option);
        document.getElementById('inp-item-lista').value = '';
        arrayLista.push(inpValue);
    }
}

function salvarLista() {    
    localStorage.setItem('listaMercado', JSON.stringify(arrayLista));
}

function carregarLista() {   
    const lista = localStorage.getItem('listaMercado');
    
    if (lista == null) {
        alert("Não há itens salvos")
    }
    else {
        arrayLista = JSON.parse(lista);
        const pai = document.getElementById('itens-da-lista');
        arrayLista.forEach(item => {
            const option = document.createElement('option');
            option.textContent = item;            
            pai.appendChild(option);            
        });
    }      
}