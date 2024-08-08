const frase = prompt("Ingrese una frase: ");
let tamanio = frase.length;
console.log("El tamaño de la palabra ingresada es de " + tamanio + " caracteres.")
let fraseMayusc = frase.toUpperCase();
let fraseMinusc = frase.toLowerCase();

let minuscMayusc = fraseMinusc + " - " + fraseMayusc;

console.log(minuscMayusc)