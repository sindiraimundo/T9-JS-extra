// 4. Dado um objeto :
const livros = {
1: {
titulo: "Javascript Eloquente",
quemEscreveu: "Marijn Haverbeke",
link: "https://github.com/braziljs/eloquente-javascript",
},
2: {
titulo: "Você não sabe JS",
quemEscreveu: "Kyle Simpson",
link: "https://github.com/cezaraugusto/You-Dont-Know-JS",
},
3: {
titulo: " Mulheres, raça e classe",
quemEscreveu: "Angela Davis",
link: "https://edisciplinas.usp.br/pluginfile.php/4248256/mod_resource/content/0/Angela%20Davis_Mulheres%2C%20raca%20e%20classe.pdf",
}
}

// Liste todas as informações com o laço for in
// A saída deverá ser:

// Javascript Eloquente
// Marijn Haverbeke
// https://github.com/braziljs/eloquente-javascript
// ...

//Resolução com for in
console.log('--------For In-----------')// // ideal para objeto

for (titulo in livros) {//for in utilizados para objetos
    console.log(livros[1].titulo)// printando objeto[indice do objeto].propriedade acessada
    console.log(livros[1].quemEscreveu)
    console.log(livros[1].link)
}