# Exercicios javascript aula 08 22/11/2024

### Exercicio 1
A questão solicita um programa para informar se a pessoa é maior de idade ou não a partir da idade informada.

Foi feita uma função que tem como parametro a **idade** e a partir dela e feita a verificação e como resultado a mensagem informando se é maior de idade ou não

/**
 * Essa função realiza a verificação a partir da idade para informar se a pessoa é maior de idade ou não
 * 
 * @param {Number} idade Parametro obrigatorio
 * @returns {string} mensagem se é maior ou de menor de idade
 * 
 */

### Exercicio 2
A questão solicita um programa para responder qual é o dia da semana a partir de um numero e caso o numero seja um numero invalido informa o mesmo.

Foi feita uma função que recebe um **numero** que é verificado qual é o dia da semana mas caso o numero não corresponder a um dia da semana é retornado como numero invalido.

/**
 * Essa função recebe um numero e a partir dele verifica qual é o dia da semana ou se é um numero invalido
 * 
 * @param {Number} numero Parametro obrigatorio
 * @returns {String} Retorna uma mensagem correspondente ao numero que foi informando sendo ele um dia da semana ou numero invalido
 */

### Exercico 3
A questão pede um programa para informar se o numero informado é ímpar ou par

Foi feita uma função que tem como parametro **numero** e que faz uma divisão por 2 e analisa se teve resto da divisão para informar se é **Ímpar** e caso não teve resto para informar que é **Par**

/**
 * Essa função recebe um numero e informa se ele é ímpar ou par
 * 
 * @param {Number} numero Parametro obrigatorio
 * @returns {String} Uma mensagem informando se o numero é ímpar ou par
 */


### Exercico 4
A questão pede um programa de verificação de acesso de acordo com a idade do usuario, permissão de admin e se o usuario esta bloqueado ou não

Foi feita a função **podeAcessar** que so permite o acesso de usuarios maiores de 18 anos ou se são admin`s e que não estejam bloqueados

/**
 * Essa Função recebe um dicionario com informações de idade, se é admin e se esta bloqueado, para realizar verificações e permitir o acesso ou não
 * 
 * @param {Number} idade Parametro obrigatorio
 * @param {Boolean} isAdmin Parametro obrigatorio
 * @param {Boolean} isBlocked Parametro obrigatorio
 * @returns {Boolean} se permite ou nao a entrada do usuario
 */

 ### Exercicio 5
 A questão pede um programa para calcular o valor final de um produto com desconto

 Foi feita a função **calcularDesconto** onde utiliza de dois parametros precoOriginal e porcentagemDesconto para fazer os calculos e retornar o valor final do produto com desconto

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
