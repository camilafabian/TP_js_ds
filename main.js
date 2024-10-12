//variables

//let te permite declarar variables que solo perteneceran al bloque de codigo en el qeu se encuentra declarado, pero si usamos var tiene un alcance global(aunque no se use por que es mala practica)

//Ejercicio 1.2
let a = 10;
let b = 5;
let c = a + b;
console.log('SUMA DE VARIABLES');
console.log(a, b);
console.log('y la suma de a y b es',c);

//Ejercicio 1.3
//let nombreIngresado = prompt("¿Cuál es tu nombre?");
//console.log('Hola,' , nombreIngresado , '!');

//Ejercicio 2.1 operadores logicos
let d = 10;
let e = 101;
let f = 4;
console.log('COMPRACION DE VARIABLES');
console.log('entre D, E y F');
if (d > e  && d > f){
  console.log('el numero mas grande es D que vale:', d);
} else if(e > d  && e > f){
  console.log('el numero mas grande es E que vale:', e);
} else{
  console.log('el numero mas grande es F que vale:', f);  
}

//ejercicio 2.2 es par o impar

// let numIngresado = prompt("Ingrese un número y te dire si es par o impar");

// numIngresado = Number(numIngresado);

// if (numIngresado % 2 === 0) {
//     alert("El número " + numIngresado + " es par.");
// } else {
//     alert("El número " + numIngresado + " es impar.");
// }

//ejercicio 3.1 asignacion y bucles
// console.log('WHILE');
// let contador = 1;
// while (contador < 11) {
//     console.log(contador);
//     contador++;
// }


//ejercicio 3.2

// let nIngresado;
// do {
//     nIngresado = prompt("Por favor, ingresa un número mayor a 100:");

//     nIngresado = Number(nIngresado);

//     console.log("Número ingresado: " + nIngresado);
// } while (nIngresado <= 100);


//ejercicio 4.1
function esPar(numParidad){
  if(numParidad % 2 == 0){
    return true; //par
  } else {
    return false;
  }
}
//pruebas
console.log(esPar(4));
console.log(esPar(2));
console.log(esPar(11));
console.log(esPar(17));

//ejercicio 4.2
// let gradosC = prompt("Por favor, ingresa una una temperatura en Celcius para pasar a Farenheit");
// let gradosF;
// function convertirCelsiusAFahrenheit(gradosC, gradosF){
//   gradosC = Number(gradosC);
//   gradosF = (gradosC * (9/5)) + 32;
//   return gradosF;
// }
// console.log(gradosC,'°C', 'son equivalentes a', convertirCelsiusAFahrenheit(gradosC),'°F');


//ejercicio 5.1
// let persona = {
//   nombre: "Lara",
//   edad: 25,
//   ciudad: "Buenos Aires",

//   cambiarCiudad: function(nuevaCiudad) {
//       this.ciudad = nuevaCiudad;
//   }
// };

// console.log("Propiedades originales:", persona);
// persona.cambiarCiudad("Córdoba");
// console.log("Propiedades actualizadas:", persona);


//ejercicio 5.2
let libro = {
  titulo: "El nombre del viento",
  autor: "Patrick Rothfuss",
  año: 2007,

  // Método para determinar si el libro tiene más de 10 años
  esAntiguo: function() {
      const añoActual = new Date().getFullYear();
      const añosDesdePublicacion = añoActual - this.año;

      if (añosDesdePublicacion > 10) {
          console.log(`El libro "${this.titulo}" es antiguo.`);
      } else {
          console.log(`El libro "${this.titulo}" es reciente.`);
      }
  }
};


//ejercicio 6.1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//nuevo array
let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}
console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);



//ejercicio 6.2
let pares = [];
for(let i = 1; i < 20; i++){
  if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log("Los primeros numeros pares hasta el 20 son:", pares );


//ejercicio 7.1
function cambiarColor() {
  // Seleccionar los p
  let parrafos = document.querySelectorAll("p");
  // Cambiarcolor
  parrafos.forEach(function(parrafo) {
      parrafo.style.color = "blue";
  });
}




