const selector = document.getElementById("mensaje");
const nombre = prompt("¿Como te llamas?");
selector.innerHTML = "Un gusto saludarte " + nombre;
alert("Bienvenido "+ nombre + "! =) ");