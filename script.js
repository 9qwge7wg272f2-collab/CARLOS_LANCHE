let carrinho = [];
let total = 0;

function adicionar(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalTexto = document.getElementById("total");

    lista.innerHTML = "";

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    totalTexto.textContent = `R$ ${total.toFixed(2)}`;
}

document.getElementById("finalizar").addEventListener("click", function () {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Pedido finalizado!");
});