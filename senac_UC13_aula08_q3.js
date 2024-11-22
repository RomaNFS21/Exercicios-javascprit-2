/**
 * Essa função recebe um numero e informa se ele é ímpar ou par
 * 
 * @param {Number} numero Parametro obrigatorio
 * @returns {String} Uma mensagem informando se o numero é ímpar ou par
 */

var parOuImpar = (numero) => {
    if (numero % 2 == 0){
        console.log("Par")
    } else if (numero % 2 != 0){
        console.log("Ímpar")
    }
};

// Teste com o numero 10
parOuImpar(10)

// Teste com o numero 15
parOuImpar(15)

// Teste com o numero 22
parOuImpar(22)