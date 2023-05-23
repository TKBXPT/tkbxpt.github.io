// 1-Escribe un programa que sume dos números y muestre el resultado en la consola
let numero1 = 2;
let numero2 = 1;

let resul = numero1 + numero2;
console.log("1)el resultado es: " + resul);

// 2-Crea una función que reciba dos números como parámetros y devuelva su suma.
function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

let suma = sumar(numero1, numero2);
console.log("2)la suma por funcion es: " + suma);

// 3-Escribe un programa que determine si un número es par o impar. Muestra el resultado en la consola
if (numero1 % 2 === 0) {
    console.log("3)el numero " + numero1, "es par");
} 
else {
    console.log("3)el numero "+ numero1, "es impar");
}

// 4-Crea una función que reciba una cadena de texto como parámetro y devuelva la cantidad de caracteres que contiene.
let cadena = "Buen finde profe";

function contadorDeChars(cadena) {
  let cantidad = cadena.length;
  return cantidad;
}

let charsInCadena = contadorDeChars(cadena);
console.log("4)la cantidad de caracteres que tiene: '" + cadena, "' es " + charsInCadena);

// 5-Escribe un programa que recorra los números del 1 al 20 y muestra el resultado en la consola
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("5)FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("5)Fizz");
  } else if (i % 5 === 0) {
    console.log("5)Buzz");
  } else {
    console.log("5)"+i);
  }
}

// 6-Escribe un programa que calcule la suma de todos los números del 1 al 100 y muestre el resultado en la consola
let itera = 0;
for (let i = 1; i <= 100; i++) {
  itera += i;
}
console.log("6)La suma de los primeros 100 numeros por iteracion es: "+ itera);

// 7-Escribe un programa que recorra un array de números y muestre cada elemento en la consola
let arrayNumerico = [1, 2, 3];

arrayNumerico.forEach(numero => {
    console.log("7)este numero esta dentro de un array: " + numero)
});

// 8-Crea una función que tome un array de palabras como parámetro y devuelva la cantidad total de caracteres en todas las palabras
let arrayPalabras = ["Hola", "como", "andas"];

function calcularCharsArray(arrayPalabras) {
  let totalChars = 0;
  arrayPalabras.forEach(palabra => {
    totalChars += palabra.length;
  });
  return totalChars;
}

let totalCharsArray = calcularCharsArray(arrayPalabras);
console.log("8)el total de los caracteres es: " + totalCharsArray);

// 9- Escribe un programa que encuentre el elemento más grande en un array de números y lo muestre en la consola.
let maximo = Math.max.apply(null, arrayNumerico);
console.log("9)el numero más grande es: " + maximo);

// 10-Dado un array de números crea una función que devuelva un nuevo array con solo los números pares
function obtenerNumerosPares(arrayNumerico) {
  let numerosPares = arrayNumerico.filter(numero => numero % 2 === 0);
  return numerosPares;
}

let numerosPares = obtenerNumerosPares(arrayNumerico);
console.log("10)los numeros pares son: " + numerosPares);