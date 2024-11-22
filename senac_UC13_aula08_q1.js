/**
 * Essa função realiza a verificação a partir da idade para informar se a pessoa é maior de idade ou não
 * 
 * @param {Number} idade Parametro obrigatorio
 * @returns {string} mensagem se é maior ou de menor de idade
 * 
 */


var verificarIdade = (idade) => {
    if (idade < 18){
        console.log("Menor de idade")
    } else if (idade >= 18) {
        console.log("Maior de idade")
    } 
};

//Verificação com 15 anos
verificarIdade(15)

//Verificação com 18 anos
verificarIdade(18)

//Verificação com 21 anos
verificarIdade(21)