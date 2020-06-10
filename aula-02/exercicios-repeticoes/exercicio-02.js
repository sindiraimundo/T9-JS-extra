// 2. Dado um array de objetos: 

const usuarios = [
{ nome: "Jordana", idade: 18 },
{ nome: "Lilian", idade: 28 },
{ nome: "Janaina", idade: 19 },
{ nome: "Carla", idade: 25 },
{ nome: "Maíra", idade: 32 },
{ nome: "George", idade: 30 },
{ nome: "Camila", idade: 27 },
{ nome: "Janaína", idade: 22 },
{ nome: "Amanda", idade: 50 },
{ nome: "Raquel", idade: 45 }
];

// Imprima todos nome e idade do array que contém objetos usuários.
// A saída deverá ser:

// Jordana
// 18

// Lilian
// 28
// ...

// RESOLUÇÃO COM FOR

let nomeAluna = "";
let idadeAluna;

console.log('----------for -----------------')// ideal para Array(lista)
for (let i = 0; i < usuarios.length; i++) {//importante para percorrer meu array, colocar para percorrer o tamanho(length) do array
    console.log(usuarios[i].nome) // printar array[indice]. propriedade do objeto a ser acessado(mostar apenas o que contém no meu indice)
    console.log(usuarios[i].idade) // é uma instrução, de comparação de true e false. se a condição for true executa...
}

console.log('----------for of-----------------')// ideal para Array(lista)

//resolução com for of// utilizado para a leitura de tudo o que contém no array
for (usuario of usuarios) { //utiliza um parâmetro auxiliador(usuario) of array(objeto)
    console.log(usuario.nome)// printando parâmetro.propriedade a ser acessada.
    console.log(usuario.idade)
}

console.log('------------forEach---------------')// ideal para Array(lista)

//resolução com forEach controlada e abstrata. 
usuarios.forEach((usuario) => {   //referencia diretamente ao array, mas será preciso de um parâmetro auxiliador, 
    console.log(usuario.nome)   //no caso do exercicio é utilizado(usuario)
    console.log(usuario.idade) // pegará todos os itens e não possui a candição de false, executa mesmo que a condição de undefined
})

