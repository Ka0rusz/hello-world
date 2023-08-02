const aposentada = false;
const pessoComDeficiencia = true;
const rendimento = 2800000;

if(aposentada == true || pessoComDeficiencia == true){
    console.log("ISENTO")
}
else if(rendimento <= 2800000){
    console.log("VAZA LEÃO! JA TA DIFICIL SEM VOCE")
}
else{
    console.log("PEGA LEÃO")
}


