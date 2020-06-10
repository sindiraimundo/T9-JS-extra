// 3. Reescreva a função abaixo utilizando
// Arrow Function 

// const objetoUsuario = function (id, nome) {
//     return {
//       id: id,
//      nome: nome
//     }
//}

const objetoUsuario = (id,nome) =>({ id: id, nome: nome })
console.log(objetoUsuario(123,'jessica'))