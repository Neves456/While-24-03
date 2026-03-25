let numeros = [5, 12, 8, 20, 3, 15];
let i = 0;
let contador = 0;

while (i < numeros.length) {
    if (numeros[i] > 10) {
        contador++;
    }
    i++;
}

console.log("Quantidade de números maiores que 10:", contador);