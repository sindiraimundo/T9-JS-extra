// 2. Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:

// A função deve retornar com as seguintes notas:
// Se a pontuação for maior que 90, retornar: "A"
// Se a pontuação for maior que 80, retornar: "B"
// Se a pontuação for maior que 70, retornar: "C"
// Se a pontuação for maior que 65, retornar: "D"
// ou "F" 

function retornarNota(numero){// criando função e passando parâmetro
    if(numero > 90) {
        return "A";
    } else if (numero > 80) {// passando condições
        return "B";
    }else if (numero > 70) {
        return "C";
    }else if (numero > 65) {
        return "D";
    } else{
        return "F"
    }
}

const notas = retornarNota(65) //armazenando numero na variavel para executar função retornarNota

console.log(notas)//printando resultado