const edad = Number(prompt("Ingrese su edad"));
if(isNaN(edad)){
    alert("Por favor ingrese una edad valida!.")
} else if (edad > 100 || edad < 1) {
    alert("Edad no valida");
} else if (edad >= 18) {
    alert("Es mayor de edad")
} else {
    alert("Es menor de edad")
}
