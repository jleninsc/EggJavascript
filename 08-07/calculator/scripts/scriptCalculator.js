
const cantidadNumeros = Number(prompt("Ingrese cantidad de numeros a sumar: "));

let sumatoria = 0;

for (let i = 0; i < cantidadNumeros; i++) {
    sumatoria += Number(prompt("Ingrese numero " + (i + 1) + ": "));
}

const insertar = document.getElementById("resultado");
insertar.innerHTML = "La suma de los numeros es " + sumatoria;