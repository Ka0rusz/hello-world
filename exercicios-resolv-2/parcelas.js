const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

const valorParcelaEmReais = (valorDoProduto/quantidadeDoParcelamento)/100;
const parcelasPagas = valorPago/valorParcelaEmReais;

console.log(`restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de ${valorParcelaEmReais.toFixed(2)}`);
