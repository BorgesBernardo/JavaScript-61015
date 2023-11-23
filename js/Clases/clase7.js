// Funciones de orden superior

// Es cuando una función retorna otra función, cuando hay una función padre y una hija

// Programación imperativa, es el como se hace, paso por paso

const mayorQue = (numero1) => {
 
  return (numero2) => {  // Retorna el resultado de la comparación

    return numero1 > numero2 }; // Retorna la comparación entre los 2 parámetros
}

const resultado = mayorQue(2);
console.log(resultado(3));

console.log("-------------")


function porCadaUno(array, funcion){

  for (let i=0; i < array.lenght; i++){

    funcion (array[i]);

  }
}

const arrayNumeros = [1,2,3,4,5];
const funcionCallBack = (numero) => {console.log(numero)};

porCadaUno (arrayNumeros , funcionCallBack);

// Métodos de orden superior

const personas = [
  {id: 1, nombre: "daniel", nota:8},
  {id: 1, nombre: "Bernardo", nota:4},
  {id: 1, nombre: "Gabriel", nota:9},
]

// FOREACH --> Recorre todo un array y muestra cada elemento
console.log("--- Método ForEach ----")

function mostrarEnPantalla (elemento){
  console.log(elemento);
}

personas.forEach(mostrarEnPantalla);




// FIND --> Recibe una función como parámetro y retorna el elemento que cumpla la condición o undefind sino existe
console.log("--- Método FIND ----");

const resultado2 = personas.find((persona) =>{
  return persona.nombre === "Bernardo";
}
);

console.log(resultado2);


// FILTER --> Filtra en base a una condición y esta retorna un nuevo array con lo filtrado
// siempre retorna un array, vacío o no. Vacío en el caso de que no haga match

console.log("--- Método FILTER ----");

const variable3 = personas.filter((persona) =>{

  return persona.nombre === "daniel";

}
);

console.log(variable3);


// SOME --> retorna un boolean si la condición se cumple o no
// se utiliza para saber si existe un elemento o no

console.log("--- Método SOME ----");

const variable4 = personas.some((persona)=>{

  return persona.nota === 4;

});

console.log (variable4);


// MAP --> retorna un array en base a las condiciones
// Me arma un nuevo array

console.log("--- Método MAP ----");


// Ejemplo
// Necesito agregar un aprobado o desaprobado en base a las notas (Aprobado > 7)

const variable5 = personas.map((persona) =>{

  if(persona.nota >= 7) {
    return {
      id: persona.id,
      nombre: persona.nombre,
      nota: persona.nota,
      condicion: "Aprobado"
    }
  } else {
    return {
      id: persona.id,
      nombre: persona.nombre,
      nota: persona.nota,
      condicion: "Desaprobado"
    }
  }

});

console.log(variable5);

// REDUCE --> devuelve un único valor y en cada iteración va a manipular ese valor
// se utiliza para acumular 

// Recibe 2 parámetros, el primero es la función a ejecutar y el segundo es el valor inicial que nos va a retornar "ej = 0"

console.log("--- Método REDUCE ----");


// sacar el promedio de notas de mi cursada

const variable6 = personas.reduce ((acumulador,current) =>{
    return acumulador + current.nota;
},0);

console.log(variable6/personas.length);




