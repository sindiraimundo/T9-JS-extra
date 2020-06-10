const livros = {
    1: {
      "titulo": "Javascript Eloquente",
      "quemEscreveu": "Marijn Haverbeke",
      "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
      "titulo": "Você não sabe JS",
      "quemEscreveu": "Kyle Simpson",
      "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
      "titulo": " Mulheres, raça e classe",
      "quemEscreveu": "Angela Davis",
      "link": "https://edisciplinas.usp.br/pluginfile.php/4248256/mod_resource/content/0/Angela%20Davis_Mulheres%2C%20raca%20e%20classe.pdf"
    }
  }

  const lista = document.getElementById('lista-do-catalogo');// acessando a ul pelo ID lista-do-catalogo

  for(propriedade in livros){// for in usado só para objeto
      const meuLivro = document.createElement("li");// criando lista e armazenando na const livros
      lista.appendChild(meuLivro);// inserindo filho LI na UL guardada na (const lista) 
      meuLivro.classList.add("livro");// adicionando uma classe "livro" para cada LI criada e guardada na const meuLivro
      
      const tituloLivro = document.createElement("h2");// criando um h2 e guardando na const tituloLivro
      meuLivro.appendChild(tituloLivro);//adicionou em cada li pela const meuLivro o h2 armazenado na const tituloLivro
      tituloLivro.textContent = livros[propriedade]["titulo"];//adicionou em cada h2 a propriedade titulo
      tituloLivro.classList.add("livro__titulo")// no h2 guardado na const tituloLivro adicionou a classe livro__titulo
      
  }
  