const INDICE = 13
let SOMA = 0
let K = 0

while (K < INDICE) {
  K += 1
  SOMA += K
}

console.log(SOMA)

/*
O valor final da variável SOMA será 91.
O loop while começa com K igual a zero e SOMA igual a zero.
Na primeira iteração, K é incrementado para 1 e SOMA é incrementado em 1,
resultando em SOMA igual a 1. Na segunda iteração, K é incrementado para 2 e SOMA é incrementado em 2,
resultando em SOMA igual a 3. Esse processo continua até que K seja incrementado para 13 e SOMA seja incrementado em 13,
resultando em SOMA igual a 91. Portanto, ao final do processamento, a variável SOMA terá o valor 91.
*/