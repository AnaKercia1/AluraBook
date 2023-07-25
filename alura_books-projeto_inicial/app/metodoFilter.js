const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? FiltrarpPorDisponibilidade()
      : FiltrarPorCategoria(categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calculaValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalDeLivrosDisponveis(valorTotal);
  }
}
function FiltrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function FiltrarpPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDeLivrosDisponveis(valorTotal) {
  elementoComValorTotalDeLivrosDisponveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `;
}
