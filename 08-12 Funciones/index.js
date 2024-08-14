const calcularVelocidad = (distancia, tiempo) => {
  return distancia / tiempo;
};

const velocidad1 = calcularVelocidad(10, 2);
const velocidad2 = calcularVelocidad(30, 3);
const velocidad3 = calcularVelocidad(48, 2);
console.log(
  "Las velocidades resultantes son:\nPedro\t\t: " +
    velocidad1 +
    " m/s\nMaria\t\t: " +
    velocidad2 +
    " m/s\nMiguel\t\t: " +
    velocidad3 +" m/s"
);
