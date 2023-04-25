//A lógica é adicionar 2 ao número anterior em cada termo da sequência. O próximo elemento é 9.

let a = [1, 3, 5, 7];
let proximoElementoA = a[a.length-1] + 2;
console.log(proximoElementoA); // saída: 9


//A lógica é multiplicar cada termo anterior por 2. O próximo elemento é 128.

let b = [2, 4, 8, 16, 32, 64];
let proximoElementoB = b[b.length-1] * 2;
console.log(proximoElementoB); // saída: 128


//A lógica é elevar cada número natural ao quadrado. O próximo elemento é 49.

let c = [0, 1, 4, 9, 16, 25, 36];
let proximoElementoC = Math.pow(c.length, 2);
console.log(proximoElementoC); // saída: 49


//A lógica é elevar cada número par ao quadrado. O próximo elemento é 100.

let d = [4, 16, 36, 64];
let ultimoImpar = d[d.length-1] + 1;
let proximoElementoD = Math.pow(ultimoImpar, 2);
console.log(proximoElementoD); // saída: 100


//A lógica é somar os dois termos anteriores em cada termo da sequência. O próximo elemento é 13.

let e = [1, 1, 2, 3, 5, 8];
let proximoElementoE = e[e.length-1] + e[e.length-2];
console.log(proximoElementoE); // saída: 13


//A lógica é todos os números começam com a letra D. O próximo elemento é 200

let f = [2, 10, 12, 16, 17, 18, 19];
let proximoElementoF = 200;
console.log(proximoElementoF); // saída: 200
