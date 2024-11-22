/**
 * Essa função recebe um numero e a partir dele verifica qual é o dia da semana ou se é um numero invalido
 * 
 * @param {Number} numero Parametro obrigatorio
 * @returns {String} Retorna uma mensagem correspondente ao numero que foi informando sendo ele um dia da semana ou numero invalido
 */

var definirDiaDaSemana = (numero) => {
    if (numero == 1){
        console.log("Domingo")
    } else if (numero == 2){
        console.log("Segunda-Feira")
    } else if (numero == 3){
        console.log("Terça-Feira")
    } else if (numero == 4){
        console.log("Quarta-Feira")
    } else if (numero == 5){
        console.log("Quinta-Feira")
    } else if (numero == 6){
        console.log("Sexta-Feira")
    } else if (numero == 7){
        console.log("Sábado")
    } else if (numero < 1 || numero > 7){
        console.log("Número inválido")
    }

};
//Teste para terça feira
definirDiaDaSemana(3)

//Teste para sábado
definirDiaDaSemana(7)

//Teste para numero invalido
definirDiaDaSemana(8)