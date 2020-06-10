// 3. Crie uma estrutura switch case na qual armazene o dia da semana
// em que estamos em uma variável auxiliadora.

// Você precisará de uma variável para armazenar,
// durante os cases, o dia da semana.

// Cada dia da semana pode ser um valor:

//    0        1       2      3       4       5      6
// dom   seg   ter  quar quin  sext  sab

// Para você conseguir pegar a data de hoje,
// utilize o (new Date().getDay()) como parâmetro.

// Onde
// case 0:
// diaSemana = "Domingo";
// break;
// case 1:
// ...

let diaSemana 

switch(new Date().getDay()){

    case 0:
        diaSemana = "Domingo";
        console.log("O dia da semana é Domingo");
        break;
        case 1:
        diaSemana = "Segunda";
        console.log("O dia da semana é Segunda");
        break;
        case 2:
        diaSemana = "Terça";
        console.log("O dia da semana é Terça");
        break;
        case 3:
        diaSemana = "Quarta";
        console.log("O dia da semana é Quarta");
        break;
        case 4:
        diaSemana = "Quinta";
        console.log("O dia da semana é Quinta");
        break;
        case 5:
        diaSemana = "Sexta";
        console.log("O dia da semana é Sexta");
        break;
        case 6:
        diaSemana = "Sábado";
        console.log("O dia da semana é Sábado");
        break;
}

