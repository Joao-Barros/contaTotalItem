const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('./calculaTotalItem');

lab.experiment('retorna o id', () => {
    lab.test ('deve retornar o nome e o valor do produto', (done) => {
      expect(calculaTotalItem(1,2).to.equal({id: 1, nome: 'Banana', valor:2}))
  )}
})
