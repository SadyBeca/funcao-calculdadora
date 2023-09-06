
function calculadora(){ 
    const operacao = Number(prompt('Escolha uma operacao:\n 1 - Soma (+)\n 2 - Subtração\n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**):'));
    validaValorDaOperacao(operacao);    
}

function validaValorDaOperacao(operacao){
    if (!operacao || operacao <= 0 || operacao > 6){
        alert('Operação inválida, tente novamente!')
        calculadora();
    }
    else{
        verificaQualOperacao(operacao);
    }
}

 
function verificaQualOperacao(valorDaOperacao){
    let numero1 = Number(prompt('Insira o primeiro valor da operação(atenção, pois em algumas operações a ordem dos fatores altera o resultado): '));
    let numero2 = Number(prompt('Insira o primeiro valor da operação(atenção, pois em algumas operações a ordem dos fatores altera o resultado): '));
    if (valorDaOperacao === 1){
        soma(numero1, numero2);
    }
    else if (valorDaOperacao === 2) {
        subtracao(numero1, numero2);
    }
    else if(valorDaOperacao === 3){
        multiplicacao(numero1, numero2);
    }
    else if(valorDaOperacao === 4){
        divisaoReal(numero1, numero2);
    }
    else if(valorDaOperacao === 5){
        divisaoInteira(numero1, numero2);
    }
    else if(valorDaOperacao === 6){
        potenciacao(numero1, numero2);
    }
}


function soma(numero1,numero2){
    let resultadoFinal = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultadoFinal}`);
    novaOperacao()
}

function subtracao(numero1,numero2){
    let resultadoFinal = numero1 - numero2;
    alert(`${numero1} - ${numero2} = ${resultadoFinal}`);
    novaOperacao()
}

function multiplicacao(numero1,numero2){
    let resultadoFinal = numero1 * numero2;
    alert(`${numero1} * ${numero2} = ${resultadoFinal}`);
    novaOperacao()
}

function divisaoInteira(numero1,numero2){
    let resultadoFinal = numero1 / numero2;
    alert(`${numero1} / ${numero2} = ${resultadoFinal}`);
    novaOperacao()
}

function divisaoReal(numero1,numero2){
    let resultadoFinal = numero1 % numero2;
    alert(`O resto da divisão entre ${numero1} e ${numero2} é ${resultadoFinal}`);
    novaOperacao()
}

function potenciacao(numero1,numero2){
    let resultadoFinal = numero1 ** numero2;
    alert(`${numero1} elevado a ${numero2} é ${resultadoFinal}`);
    novaOperacao()
}

function novaOperacao(){
    let opcao = Number(prompt('Deseja fazer uma nova operacao?\n 1 - Sim\n 2 - Não'));

    if(opcao === 1){
        calculadora();
    }
    else if( opcao === 2){
        alert('Até mais!');
        calculadora();
    }
    else{
        novaOperacao()
    }        
}


calculadora();
