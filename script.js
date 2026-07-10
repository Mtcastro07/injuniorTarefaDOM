let addButton = document.querySelector(".adicionarItem");
let menuInicial = document.querySelector(".nenhum");
let addItem = document.querySelector(".fundo");
let fecharAdicionar = document.querySelectorAll(".sair")[0];
let fecharEditar = document.querySelectorAll(".sair")[1];
let cancelar = document.querySelector(".cancelar");
let adicionar = document.querySelector(".adicionar");
let produto = document.querySelector("#nome");
let quantidade = document.querySelector("#valor");
let qntdItens = document.querySelector(".quantidade");
let listaProdutos = document.querySelector(".lista");
let lista = document.querySelector(".fundoLista");
let edicao = document.querySelector(".editar");
let menuEdicao = document.querySelector(".fundoEdicoes");
produtos = [];

function criarLista(products) {
  listaProdutos.classList.add("lista");
  let li = document.createElement("li");
  let divisao = document.createElement("div");
  li.classList.add("linha");
  divisao.classList.add("linhas");
  let name = document.createElement("p");
  let qntd = document.createElement("p");
  qntd.classList.add("quantidadeProduto");
  name.classList.add("nomeProduto");
  qntd.textContent = products.numero;
  name.textContent = products.nome;
  li.append(name, qntd);
  divisao.appendChild(li);
  listaProdutos.appendChild(divisao);
  addItem.classList.remove("aberto");
  produto.value = "";
  quantidade.value = "";
  qntdItens.innerText = produtos.length;
  listExibition();
}

function criarListaEditavel() {}

function listExibition() {
  if (produtos.length > 0) {
    menuInicial.classList.add("fechado");
    lista.classList.add("aberto");
  } else {
    if (
      menuInicial.classList.contains("fechado") &&
      lista.classList.contains("aberto")
    ) {
      menuInicial.classList.remove("fechado");
      lista.classList.remove("aberto");
    }
  }
}

addButton.addEventListener("click", () => {
  menuInicial.classList.add("fechado");
  addItem.classList.add("aberto");
});

fecharAdicionar.addEventListener("click", () => {
  if (addItem.classList.contains("aberto")) {
    addItem.classList.remove("aberto");
  }
});

fecharEditar.addEventListener("click", () => {
  if (!menuEdicao.classList.contains("fechado")) {
    menuEdicao.classList.add("fechado");
  }
});

cancelar.addEventListener("click", () => {
  if (
    menuInicial.classList.contains("fechado") ||
    addItem.classList.contains("aberto")
  ) {
    menuInicial.classList.remove("fechado");
    addItem.classList.remove("aberto");
  }
});

adicionar.addEventListener("click", () => {
  let item = {
    nome: produto.value,
    numero: quantidade.value,
  };
  produtos.push(item);

  criarLista(item);
});

edicao.addEventListener("click", () => {
  if (produtos.length == 0) {
    alert("não há produtos na lista!");
  } else {
  }
});
