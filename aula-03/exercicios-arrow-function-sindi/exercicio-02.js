// 2. Crie uma função chamada retornarBiografia que retorne o objeto abaixo:
// {nome: "Mulheres, raça e classe",
// descrição:"Da mesma forma que gênero é a maneira como a raça é vivida."
// }
console.log('---------ARROW FUNCTION----------')
// resolução com ARROW FUNCTION
const retornarBiografia = () =>({
    nome: "Mulheres, raça e classe",
    descricao: "Da mesma forma que gênero é a maneira como a raça é vivida.",
})
console.log(retornarBiografia())
 
///FORMA MAIS REDUZIDA DE RESOLVER
// let retornarBiografia = (nome, descricao) => ({
//     nome, descricao
// })
// console.log(retornarBiografia("Jessica", "desenvolvedora"))
