const edad = Number(prompt("Ingrese su edad"));
if (edad > 100 || edad < 1) {
    alert("Edad no valida");
} else if (edad > 18) {
    alert("Es mayor de edad")
} else {
    alert("Es menor de edad")
}
