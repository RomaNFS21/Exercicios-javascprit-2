/**
 * A função recebe o valor original do produto e o quanto de desconto vai ser aplicado e retorna o valor final do produto com desconto
 * 
 * @param {Number} precoOriginal Parametro obrigatorio
 * @param {Number} porcentagemDesconto Parametro obrigatorio
 * @param {Number} valorDesconto Parametro temporario
 * @param {Number} valorFinal Parametro temporario
 * @returns {Number} retorna o valorFinal que é o valor final do produto com desconto
 * 
 */

var calcularDesconto = (precoOriginal, porcentagemDesconto) => {
    valorDesconto = ((precoOriginal * porcentagemDesconto) / 100)
    valorFinal = precoOriginal - valorDesconto
    return valorFinal
}

console.log(calcularDesconto(100, 10))
console.log(calcularDesconto(250, 20))