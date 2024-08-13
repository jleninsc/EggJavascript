const calcularVelocidad = (distancia, tiempo) => {
  return distancia / tiempo;
};

const velocidad1 = calcularVelocidad(10,2);
const velocidad2 = calcularVelocidad(30,3);
const velocidad3 = calcularVelocidad(48,2);
console.log("La velocidad de Juana es " + velocidad1);
console.log("La velocidad de Pedro es " + velocidad2);
console.log("La velocidad de Maria es " + velocidad3);

