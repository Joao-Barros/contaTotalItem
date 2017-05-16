const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaItem } = require('../calculaItem');
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar a nota fiscal:', (done) => {
    expect(calculaItem(1,4)).to.equal({ produto: 'Banana', valor: 84 });
    expect(calculaItem(2,8)).to.equal({ produto: 'Maça', valor: 360 });
    expect(calculaItem(3,3)).to.equal({ produto: 'Melão', valor: 189});
    expect(calculaItem(4,50)).to.equal({ produto: 'Batata', valor: 200});
    done();
  });
});
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar o recibo de compra com o desconto:', (done) => {
    expect(calculalItem(1,4,8)).to.equal({ produto: 'Maçã', valor: 76 });
    expect(calculaItem(2,8,120)).to.equal({ produto: 'Banana', valor: 240 });
    expect(calculaItem(3,3,60)).to.equal({ produto: 'Açai', valor: 129});
    expect(calculaItem(4,50,73)).to.equal({ produto: 'Café', valor: 127});
    done();
  });
});
