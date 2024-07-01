let botao = document.getElementById("botao1")
botao.addEventListener('click', function() {
    let campoelemento = document.getElementById("campo-elemento");
    campoelemento.innerHTML = `
    <input type="text" placeholder="insira seu produto" id="produto">
    `
})
let botaoadicionar = document.getElementById('botao-adicionar');
botaoadicionar.addEventListener('click', function(){
    let produtos = document.getElementById('meus-produtos');
    let produto = document.getElementById('produto').value;

        produtos.innerText = produtos.innerText + produto + ";";
})