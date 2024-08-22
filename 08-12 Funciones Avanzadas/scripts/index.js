const comprar = (nameClient) => {
  let totalApagar = 0;
  alert("Hola " + nameClient + ", te guiaré en tu proceso de compra.");
  console.log("Productos comprados por " + nameClient + ":");
  for (let index = 1; index <= 3; index++) {
    const product = prompt("¿Qué producto deseas llevar?");
    const cantidad = Number(
      prompt("¿Cuántas unidades de " + product + " necesitas?")
    );
    const precio = Number(prompt("¿A cuánto te vendieron la unidad?"));

    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;

    console.log(
      index +
        ".- " +
        product +
        "\t" +
        cantidad +
        " unds. \tS/. " +
        precio +
        ".00 c/u\tS/. " +
        subtotal +
        ".00"
    );
  }
  console.log("Total Parcial: S/. " + totalApagar + ".00");
  return totalApagar;
};

const total = comprar("Juan") + comprar("Maria") + comprar("Carlos");

console.log("El total registrado en caja fue de S/. " + total + ".00");
