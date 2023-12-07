// Ciclos e iteraciones --> Los ciclos son algo que se repiten.


// 1° Ciclo: es el FOR que es por conteo.
// Es controlado, ya que sabemos cuando finaliza


// 2° Ciclo: WHITE y DO WHILE, es por condicionales
// No sabemos cuantas veces vamos a repetirlo, pero si sabemos la condicion de salida

// While --> primero pregunta la condición y luego ejecuta
// Do While --> ejecuta una vez y luego pregunta la condición




// console.log("--- Ciclo FOR ----");

// for( let i = 0; i < 4 ; i++ ){ // desde, hasta, actualización
//   console.log("hola mundo")
// };



// console.log("--- Ciclo WHILE ----");


// let acumulador = 0;

// let respuesta = prompt("Desea ingresar al sistema?");

// while (respuesta === "si" || respuesta === "Si"){

//   const numero = parseInt(prompt("ingrese un número"));
//   acumulador += numero;

//   respuesta = prompt("Desea agregar otro número?");
// }

// console.log (acumulador);


console.log("--- Ciclo SWITCH ----");

// Switch --> Esta diseñada para manejar multiples condiciones en una misma variable
// 

const miPelo = 'negro'
const suPelo = prompt('Ingresa tu color de pelo');

switch (suPelo){
  case "negro":
    console.log("tu color es negro")
    break;
  case "rojo":
    console.log("tu color es rojo")
    break;
  default:
    console.log("Que lastima, tu color es otro")
    break;
}
