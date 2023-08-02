const caractere = 9;

if(caractere == "a"||caractere == "e"||caractere == "i"||caractere == "o"||caractere == "u"){
    console.log("vogal minúscula");
}
else if(caractere == "A"||caractere == "E"||caractere == "I"||caractere == "O"||caractere == "U"){
    console.log("vogal maiúscula");
}
else if(caractere > -1 && caractere < 10){
    console.log("número");
}
else{
    console.log("consoante");
};