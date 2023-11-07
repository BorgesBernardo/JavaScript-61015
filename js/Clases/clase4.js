// Funciones




// Sintaxis de función clásico
// Inicializar una función

function saludar(){
  // bloque de codigo
  console.log("Hola, soy un mensaje");
}

//ejecturar funcion

saludar();

// Función anónima

const funcionAnonima = function(){
  console.log('Esto es una función anónima');
}

funcionAnonima();

// Función de tipo flecha

const funcionFlecha = () => {console.log('Esto es una función tipo flecha')};

funcionFlecha();

//-------------------------------------------------------------------

console.log('----------------------------------------------')

//Parametros

// Son parámetros qeu le pasamos a las funciones
// Valores de entrada -------- ejecuta ------- devuelve otro valor

// Función sin parámetros

function saludar1(){
  console.log(' Función saludar');
}

// Función con parámetros

function funcionConParametros (parametro1,parametro2,parametro3){

  console.log (parametro1);

  console.log (parametro2);

  console.log (parametro3);

}

funcionConParametros('Soy parametro1',2,true); 

// La posición 1 corresponde al orden del parámetro

//-------------------------------------------------------------------------------
console.log('----------------------------------------------')


// Funciones que retornan un valor

function funcionRetornaValor(){

  const numero1 = 10;
  const numero2 = 20;

  return numero1 + numero2; // indicamos que retorne un valor de la suma
}

const resultadoSuma = funcionRetornaValor(); // guardamos el resultado en la variable

console.log(resultadoSuma);

// Diferencias entre funciones

function sumarNumeros (){
  const num1 = 60;
  const num2 = 20;

  console.log (num1 + num2);
}

sumarNumeros();

function sumarDosNumeros(n1,n2){

  console.log (n1 + n2);
}

// Función en Anónimo

// const variableA = function (n1,n2){
// console.log (n1 + n2);
// }

// variableA (1,2);



// Función en tipo Flecha



// const variableB = (n1,n2) =>{
//  console.log (n1 + n2);
// }

// variableB(1,2);


//Los valores de n1 y n2 se los podemos pedir al usuaario a través de prompt

//const valor1 = parseInt(prompt("Ingrese un número"));
//const valor2 = parseInt(prompt("Ingrese un número"));

sumarDosNumeros();

console.log('----------------------------------------------')


// Scope --> es el alcance de una variable o función dentro de un contexto

// Se pueden llamar funciones y variables dentro de una función si estás están fuera de la misma
// Ejemplo:

const pruebax = 1;

function prueba2(){
  console.log(1+4);
}

function prueba (){
  console.log(pruebax);
  prueba2();
}

prueba();

console.log('----------------------------------------------')

// La función clásica tiene diferente scope que la anónima y la de tipo flecha

// La clásica se puede llamar antes de estar declarada
// La anónima y la de flecha no se puede usar antes de estar declarada.



