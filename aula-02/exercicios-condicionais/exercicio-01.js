// 1. Escreva uma função chamada compararNumero que receberá dois parâmetros,
// em seguida, retorne o número que for maior.

// O retorno deverá conter essa mensagem:

// "O maior número entre 5 e 10 é 10"

// Passo a passo da função:
// - Criar função compararValor(parametro1, parametro2)
// - Inserir uma condição onde parametro1 é maior que parametro dois?
// - Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
// - Se for falsa, retornar que a segundo parametro é maior que o primeiro. 

function comprararNumero(num1, num2){// criando a função com 2 parâmetros
    if(num1 > num2){// utilizando orperador condicional para saber qual é o maior número
        return 'O maior número entre 5 e 10 é: ', num1;
    }else{
        return num2;
    }
}
const numeroMaior = comprararNumero(5,10);

//console.log(" O maior número entre 5 e 10 é: ", numeroMaior)// retornando mensagem no console.

