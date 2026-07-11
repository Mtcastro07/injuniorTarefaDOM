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
let listaEditavel = document.querySelector(".list-edit");
let concluir = document.querySelector(".concluir");

let produtos = [];

function criarLista(products) {
  listaProdutos.innerHTML = "";

  products.forEach((product) => {
    listaProdutos.classList.add("lista");
    let li = document.createElement("li");
    let divisao = document.createElement("div");
    li.classList.add("linha");
    divisao.classList.add("linhas");
    let name = document.createElement("p");
    let qntd = document.createElement("p");
    qntd.classList.add("quantidadeProduto");
    name.classList.add("nomeProduto");
    qntd.textContent = product.numero;
    name.textContent = product.nome;
    li.append(name, qntd);
    divisao.appendChild(li);
    listaProdutos.appendChild(divisao);
    addItem.classList.remove("aberto");
    produto.value = "";
    quantidade.value = "";
  });
  qntdItens.innerText = produtos.length;
  listExibition();
}

function criarListaEditavel(produtos) {
  listaEditavel.innerHTML = "";

  produtos.forEach((product, indice) => {
    let li = document.createElement("li");
    li.classList.add("line-edit");
    let botaoEditavel = document.createElement("button");
    botaoEditavel.classList.add("btn-edit");
    botaoEditavel.innerText = "X";

    li.append(product.nome, product.numero, botaoEditavel);
    botaoEditavel.addEventListener("click", () => {
      produtos.splice(indice, 1);
      criarListaEditavel(produtos);
      criarLista(produtos);
    });
    listaEditavel.appendChild(li);
  });
}

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

  criarLista(produtos);
});

edicao.addEventListener("click", () => {
  menuEdicao.classList.remove("fechado");
  criarListaEditavel(produtos);
});

concluir.addEventListener("click", () => {
  menuEdicao.classList.add("fechado");
});
