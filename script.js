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
    botaoEditavel.innerHTML = `
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24_768)">
          <path
            d="M13.25 3.66667L12.5492 14.3448C12.4879 15.28 12.4572 15.7476 12.2584 16.1022C12.0833 16.4144 11.8192 16.6653 11.501 16.822C11.1395 17 10.6781 17 9.75542 17H6.24455C5.32186 17 4.86052 17 4.49903 16.822C4.18077 16.6653 3.91672 16.4144 3.74165 16.1022C3.54281 15.7476 3.51212 15.28 3.45075 14.3448L2.75 3.66667M1 3.66667H15M11.5 3.66667L11.2632 2.94495C11.0337 2.24556 10.9189 1.89586 10.7061 1.63732C10.5182 1.409 10.2768 1.23228 10.0042 1.12336C9.6954 1 9.33262 1 8.6069 1H7.3931C6.66738 1 6.3046 1 5.99582 1.12336C5.72318 1.23228 5.48182 1.409 5.29388 1.63732C5.08104 1.89586 4.96631 2.24556 4.73681 2.94495L4.5 3.66667M9.75 7.22222V13.4444M6.25 7.22222V13.4444"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_24_768">
            <rect width="16" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
`;
    let editName = document.createElement("p");
    editName.classList.add("line-name");
    editName.textContent = product.nome;
    let editNumero = document.createElement("p");
    editNumero.classList.add("line-number");
    editNumero.textContent = product.numero;

    li.append(editName, editNumero, botaoEditavel);
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
    menuInicial.classList.remove("fechado");
    lista.classList.remove("aberto");
  }
}

addButton.addEventListener("click", () => {
  menuInicial.classList.add("fechado");
  addItem.classList.add("aberto");
  listExibition();
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
  addItem.classList.remove("aberto");
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
