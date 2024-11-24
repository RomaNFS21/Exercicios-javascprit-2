/**
 * Essa Função recebe um dicionario com informações de idade, se é admin e se esta bloqueado, para realizar verificações e permitir o acesso ou não
 * 
 * @param {Number} idade Parametro obrigatorio
 * @param {Boolean} isAdmin Parametro obrigatorio
 * @param {Boolean} isBlocked Parametro obrigatorio
 * @returns {Boolean} se permite ou nao a entrada do usuario
 */

var podeAcessar = ( {idade, isAdmin, isBlocked} ) => {
    if ((idade >= 18 || isAdmin == true) && isBlocked == false ) {
        return true
    }
    else{
        return false
    } 
};

console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true })); // false