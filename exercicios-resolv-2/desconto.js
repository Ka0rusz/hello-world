//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito ou dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento == "credito"){
    let credito = valorDoProduto - (valorDoProduto * 5/100);
    console.log(credito);
}else if(tipoDePagamento == "cheque"){
    let cheque = valorDoProduto - (valorDoProduto * 3/100);
    console.log(cheque);
}else{
    let dinheiro = valorDoProduto - (valorDoProduto * 10/100);
    console.log(dinheiro);
}