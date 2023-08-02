const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;
const valorDaParcela = (rendaMensalEmCentavos/100)*(18/100);



if(mesesDecorridos > 60){
    console.log("O aluno não deve mais nada")
}
else if(rendaMensalEmCentavos < 200000){
    console.log("o valor da parcela desse mês é R$0. Pois, o valor a renda do estudante está abaixo do valor minimo");
}
else{
    console.log(`o valor da parcela desse mês é ${valorDaParcela}`);
}
