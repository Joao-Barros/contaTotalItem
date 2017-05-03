const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('./calculalItem');

lab.experiment('retorna o id', function() {
    lab.test ('deve retornar o nome e o valor do produto', (done) function() {
    expect(calculaTotalItem(1,2).to.equal({id: 1, nome: 'Banana', valorUnitario:2}))
  )}
})
