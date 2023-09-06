// function calculadora(){
//     const operacao = Number(prompt('Escolha uma operacao:\n 1 - Soma (+)\n 2 - Subtração\n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**):'));
//     if (!operacao || operacao <= 0 || operacao > 6){
//         alert('Operação inválida, tente novamente!')
//         calculadora()
//     }
//     else{

//     let n1 = Number(prompt('Insira o primeiro valor da operação(atenção, pois em algumas operações a ordem dos fatores altera o resultado): '));
//     let n2 = Number(prompt('Insira o primeiro valor da operação(atenção, pois em algumas operações a ordem dos fatores altera o resultado): '));
//     let resultado;

//     function soma(){
//         resultado = n1 + n2;
//         alert(`${n1} + ${n2} = ${resultado}`);
//         novaOperacao()
//     }

//     function subtracao(){
//         resultado = n1 - n2;
//         alert(`${n1} - ${n2} = ${resultado}`);
//         novaOperacao()
//     }

//     function multiplicacao(){
//         resultado = n1 * n2;
//         alert(`${n1} * ${n2} = ${resultado}`);
//         novaOperacao()
//     }

//     function divisaoInteira(){
//         resultado = n1 / n2;
//         alert(`${n1} / ${n2} = ${resultado}`);
//         novaOperacao()
//     }

//     function divisaoReal(){
//         resultado = n1 % n2;
//         alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
//         novaOperacao()
//     }

//     function potenciacao(){
//         resultado = n1 ** n2;
//         alert(`${n1} elevado a ${n2} é ${resultado}`);
//         novaOperacao()
//     }

//     if (operacao === 1){
//         soma();
//     }
//     else if (operacao === 2) {
//         subtracao();
//     }
//     else if(operacao === 3){
//         multiplicacao();
//     }
//     else if(operacao === 4){
//         divisaoReal();
//     }
//     else if(operacao === 5){
//         divisaoInteira();
//     }
//     else if(operacao === 6){
//         potenciacao();
//     }

//     else{

//     }

//     function novaOperacao(){
//         let opcao = Number(prompt('Deseja fazer uma nova operacao?\n 1 - Sim\n 2 - Não'));

//         if(opcao === 1){
//             calculadora();
//         }
//         else if( opcao === 2){
//             alert('Até mais!');
//         }
//         else{
//             novaOperacao()
//         }        
//     }

//     }
    
    

// }


// calculadora();

