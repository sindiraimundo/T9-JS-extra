// 3. Imprima os números de 0 a 50 e imprima
// se o número é par ou ímpar

// A saída deverá ser: 

// É impar: 1
// É par: 2



// for(i=0; i<=50; i++){
//     if(i % 2 != 0){
//         console.log( `Impar, ${i}`);
//     }else{
//         console.log( `Par, ${i}`);
//     }
// }

// RESOLUÇÃO COM TERNÁRIO
for(let indice = 0; indice < 10; indice++){
const verificarImparPar = indice % 2 == 0 ? `${indice} par` : `${indice} impar`
console.log(verificarImparPar)
}
