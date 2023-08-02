const alturaEmCm = 206;

if(alturaEmCm <= 179){
    console.log("reprovado");
}
else if(alturaEmCm >=180 && alturaEmCm <= 185){
    console.log("libero");
}
else if(alturaEmCm >=186 && alturaEmCm <=195){
    console.log("ponteiro");
}
else if(alturaEmCm >=196 && alturaEmCm <= 205){
    console.log("oposto");
}
else{
    console.log("centro");
}