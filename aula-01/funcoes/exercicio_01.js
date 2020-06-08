//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

/*Retorne o seguinte conteúdo:

A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.

O retorno deverá ser template string*/


function pegaNome(nome, sobrenome) {
const modificarNome = nome.toUpperCase();
const modificarSobrenome = sobrenome.toUpperCase();
  return ` ${modificarNome} ${modificarSobrenome} `
}

console.log(pegaNome('Maria', 'Silva')`${endereco}`);