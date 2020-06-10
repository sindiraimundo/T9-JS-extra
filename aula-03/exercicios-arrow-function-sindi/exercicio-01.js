
// Arrow Functions
// Question Title
// 1. Crie uma função utilizando arrow function com dois parâmetros que retorne a soma deles.

console.log('---------ARROW FUNCTION----------')
// resolução com ARROW FUNCTION
const somarNumero = (num1, num2) => {
 return num1 + num2;
}

console.log(somarNumero(10,30));

console.log('---------FUNCTION----------')
//RESOLUÇÃO SOMENTE COM FUNCTION
function calcularSoma(num1,num2) {
return num1 + num2;
}
let obterResultado = calcularSoma(10,20);
console.log(obterResultado);
