/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto'

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero de 1 a 10:';
*/

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentatitivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portugese Female',{rate:1.2});
}
function exibirMensagemIncial(){
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}
exibirMensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        let palavraTentativa = tentatitivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentatitivas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentatitivas++;
        limparCampo();
    }
}

function gerarUmNumeroAleatorio () {
    let numeroEscolhido =  parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaNumerosSorteados.length;
    if (quantidadeDeElementoNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarUmNumeroAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo();
    tentatitivas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}