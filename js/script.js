let vetor = [];

function adicionarValor() {
  const valor = Number(document.getElementById('valor').value);

  if(!isNaN(valor)) {

    vetor.push(valor);

  const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
  const novalinha = tabela.insertRow();
  const celula = novalinha.insertCell();
  celula.textContent = valor;

  document.getElementById('valor').value = '';
  document.getElementById('valor').focus();
}

function mostrarPares() {
  const tabela = document.getElementById("tabelaPares").getElementsByTagName("tbody")[0];

  tabelaPares.innerHTML ='';//limpa a tabela antes de adicionar novos Valores

    vetor.forEach(valor => {
    if (valor %2 === 0) {
        const novalinha = tabelaPares.insertRow();
        const celula = novaLinha.insertCell(0);
      celula.textContent = valor;
     }
  });
}
