alert('Boas Vindas ao jogo do número secreto!.');
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log (numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt (`Escolha um numero entre 0 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break
    }else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }
        else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1; atribui mais 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
alert(`Você acertou o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1) {    OPERADOR TERNARIO ACIMA IGUAL IF ELSE FORMA REDUZIA = CODIGO MAIS CLEAN
    alert(`Você acertou o Número Secreto ${numeroSecreto} com ${tentativas} Tentativas.`);
}else {
    alert(`Você acertou o Número Secreto ${numeroSecreto} com ${tentativas} Tentativa.`);
}
*/