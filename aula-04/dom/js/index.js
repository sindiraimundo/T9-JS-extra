const formulario = document.querySelector(".lista__form");
const itemInput =  document.getElementsByTagName("input")[0].setAttribute("id", "item");
const valorInput = document.getElementsByTagName("input")[1].setAttribute("id", "valor");
const dataInput =  document.getElementsByTagName("input")[2].setAttribute("id", "data");
const btnSalvar = document.querySelector("button")
const colunaItem = document.getElementsByTagName("th")[0];
const colunaValor = document.getElementsByTagName("th")[1];
const colunaData = document.getElementsByTagName("th")[2];

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  /*inserir aqui o código*/
  
})
    btnSalvar.addEventListener("click", (salvarItens) => {
      const addItem = document.createElement("td");
      const textoItem = document.createElement("p");
      salvarItens.preventDefault();
      colunaItem.appendChild(addItem);
      addItem.appendChild(textoItem);
      textoItem.innerText = itemInput.value;
      console.log(itemInput.value)
      // if(textoItem.innerText.trim() == "") {
      //   alert('Adicione um item');
      //   }else{
      //     colunaItem.appendChild(addItem);
      //     addItem.appendChild(textoItem);
      //   }
    })

