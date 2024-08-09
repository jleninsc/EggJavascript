let totalApagar = 0;
let resultado = "Producto\t\tCantidad\t\tPrecio\n";

for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?"); // Solicitar el nombre del producto
    let cantidad = Number(prompt("¿Cuántas unidades?")); // Solicitar la cantidad y convertir a número
    let precio = Number(prompt("¿Cuánto sale cada unidad?")); // Solicitar el precio y convertir a número

    const subtotal = cantidad * precio; // Calcular el subtotal

    resultado += nombre + "\t\t\t" + cantidad + "\t\t\t" + precio + "\n";

    totalApagar += subtotal; // Sumar el subtotal al total a pagar
}

resultado += "----------------------------------";

console.log("La lista de compras es:\n" + resultado + "\n El total es: S/. " + totalApagar + ".00"); // Mostrar el total a pagar
