let M = 90000;
let C = 60000;
let n = 24;
let i = ((M/C)**(1/n)) - 1;

i = i * 100;
i = i.toFixed(2);

console.log(i);

