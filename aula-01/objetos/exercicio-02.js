/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */
 let curso = {
     nome: "",
     periodo:"",
     professora:"",

 }

 curso.nome = "HTML",
 curso.periodo = "09/03/2020 a 21/04/2020",
 curso.professora = "Eliane"

console.log(curso)
 

let curso = {
  nome: "Lógica de Programação",
  periodo: "09h às 16h",
  professora: "Martina"
}

//alert apenas 
alert(`Nome: ${curso.nome} \n Período: ${curso.periodo} \n Professora: ${curso.professora}`)

console.log('Nome: ', curso.nome)
console.log('Período: ', curso.periodo)
console.log('Professora: ', curso.professora)
