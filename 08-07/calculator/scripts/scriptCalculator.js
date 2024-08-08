let numero1 = Number(prompt("Ingrese primer número"));
let numero2 = Number(prompt("Ingrese segundo número"));

let suma = numero1 + numero2;

const num1 = document.getElementById("num1");
num1.innerHTML = "Numero 1: " + numero1;
const num2 = document.getElementById("num2");
num2.innerHTML = "Numero 2: " + numero2;

const resul = document.getElementById("resul");
resul.innerHTML = "El resultado de sumar los dos número es: " + suma;

let promedio = suma / 2;
let triple = promedio * 3;
let tripleMenosDiez = triple - 10;

const promed = document.getElementById("promedio");
promed.innerHTML = "El promedio de los numeros ingresados es " + promedio;

const trip = document.getElementById("triple");
trip.innerHTML = "El triple promedio es " + triple;

const tripMenosDiez = document.getElementById("tripleMenosDiez");
tripMenosDiez.innerHTML = "El triple promedio menos 10 es " + tripleMenosDiez;

