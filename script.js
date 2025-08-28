const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto'). value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = processatexto (texto);

    campoResultado.textContent = palavras.join("- ");
}

function processatexto(texto){
    let palavras = texto.split(/[^a-Zn-Z]+/);
    return palavras;
}