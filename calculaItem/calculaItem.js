const listaProdutos = [
  {id: 1, nome: 'Banana', valorUnitario: 21},
  {id: 2, nome: 'Maça', valorUnitario: 45},
  {id: 3, nome: 'Melão', valorUnitario: 63},
  {id: 4, nome: 'Batata', valorUnitario: 4},
];

const calculaItem = function (codigo, quantidade, desconto) {
  let produtoEncontrado;

  for (var i = 0; i <= listaProdutos.length-1; i++){
    if (listaProdutos[i].id == codigo) {
      produtoEncontrado = listaProdutos[i];
    }
  }
  const nomeProduto = produtoEncontrado.nome;
  const total = produtoEncontrado.valorUnitário * quantidade;
  const descontoTotal = total - (desconto||0);
  console.log({ produto: nomeProduto, valor: descontoTotal });
  return { produto: nomeProduto, valor: descontoTotal}
}

module.exports = { calculaItem }
