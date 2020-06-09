/*Crie uma função que receba o parametro ano de nascimento e retorne a idade a partir do ano atual */

function receberAnoNascimento(anoNascimento){
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    console.log(`A sua idade é ${}`)
}

const resultado