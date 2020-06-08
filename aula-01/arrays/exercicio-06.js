/*Separe a seguinte frase onde cada palavra será um item de um array. */

let frase = "Na programação, muitasvezes é errando que se aprende. Permita-se"

/*A forma que terá que ficar:*/

<<<<<<< HEAD
// let modificarFrase = ["Na", "programação,",
//   "muitas", "vezes", "é", "errando", "que",
//   "se", "aprende.", "Permita-se"]

/* Em seguida, verifique o lenght do array, a saída terá que ser 10*/

let modificaFrase = frase.split(" ");

console.log(modificaFrase);
console.log("Tamanho do array: ", modificaFrase.length)
=======

/* Em seguida, verifique o lenght do array, a saída terá que ser 10*/


let modificarFrase = frase.split(" ", 3)

//verificar o que contém
console.log(modificarFrase);

//quantidade de itens no array
console.log(modificarFrase.length);
>>>>>>> 16746e0639b0e86c10fff246fe8301d629feb56d
