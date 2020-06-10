
// Estruturas de Repetições - Laços de repetições
// Aqui você poderá utilizar: 

// while
// for
// for in

// 1. REPETIR PALAVRA

// Dado duas variáveis:

// obterNome > vai armazenar um nome.
// repetirNome > vai armazenar números

// Faça um programam que repita a palavra
// De acordo com a quantidade de vezes que você
// inserir para que essa palavra seja repitida.

// exemplo:
// const obterNome = "Alessandra";
// const repetirNome = 4

// A saída terá que ser:

// "Alessandra"
// "Alessandra"
// "Alessandra"
// "Alessandra"

//Adicionando 2 variaveis



//resolução com while

// const obterNome = "Fernanda";
// const repetirNome = 4;
// let contador = 0;
// while (contador < repetirNome){
    //     contador++;
    //     console.log(obterNome);
    // }
    

    // RESOLVENDO COM FOR

    const obterNome = "Fernanda";
    const repetirNome = 4;

    for (let i = 0; i < repetirNome; i++){
        
        console.log(`${obterNome}`);
    }


