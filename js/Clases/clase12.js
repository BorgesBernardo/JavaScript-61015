// Operadores avanzados I

// Operador ++
console.log("")
console.log("-------- Operador ++ --------")
console.log("")

let num = 0;
num++;

console.log(num);


// Operador Ternario
console.log("")
console.log("-------- Operador Ternario --------")
console.log("")

// Es como un IF pero abreviado, ejemplo

// If común

if(num == 0){
  console.log("Es igual a 0");
} else{
  console.log("Es distinto de 0");
}

// Operador ternario
// Primero la condición, luego la condición verdadera y luego la falsa (TIENE QUE HABER FALSO)
// Condición ? VERDADERA : FALSO

num == 0 ? console.log("Es igual a 0") : console.log("Es distinto de 0");


// El operador ternario tiene el return implícito.

const numeroDistintoCero = num == 0 ? "Es igual a 0" : "Es distinto de 0";

console.log(numeroDistintoCero);



// Operador AND (&&)
console.log("")
console.log("-------- Operador AND && --------")
console.log("")
// Si no hay una condición que devuelva VERDADERO, NO SIRVE
// Si la condición es falsa no muestra nada, solo mostrará resultado en el caso de que sea verdadero

// SIRVE PARA VALIDAR

const respuesta = num == 0 && console.log("Es Cero")

const numero = 0;

// El operador && tiene retorno implícito, se debe guardar dentro de una constante

const respuesta2 = numero == 0 && "Es cero"

console.log(respuesta2); // Si la condición es verdadera devuelve lo de la derecha, si es falso devuelve false



// ---------- Operador OR (||) -------------------
console.log("")
console.log("-------- Operador OR || --------")
console.log("")

// El operador or sirve para poner valores por defecto

// El operador || tiene retorno implícito.


// CONDICIÓN || "" -- > Si la condición es FALSA retorna lo de la derecha.
// CONDICIÓN || "" -- > Si la condición es VERDADERA retorna la condición

console.log(0 || "False") // False
console.log(40 || "False") // 40
console.log(null || "False") // False
console.log(undefined || "False") // False
console.log("Hola Mundo" || "False") // Hola Mundo
console.log("" || "False") // False
console.log(NaN || "False") // False
console.log(true || "False") // true
console.log(false || "False") // false

// Ejemplo de uso

/*

function AltaDeUsuario (usuario){
  //
  const usuarioValidado = usuario || {} --> sino existe usuario retorna un objeto vacio


  BB.push (usuarioValidado);
}

*/


// ---------- Operador NULLISH (??) -------------------
console.log("")
console.log("-------- Operador NULLISH ?? --------")
console.log("")

// El nullish sirve los valore NULL o UNDEFIND.
// Solo va a devolver lo de la derecha cuando el otro valor sea null o undefined

console.log(0 ?? "False") // 0
console.log(40 ?? "False") // 40

console.log(null ?? "False") // False
console.log(undefined ?? "False") // False

console.log("Hola Mundo" ?? "False") // Hola Mundo
console.log("" ?? "False") // ""
console.log(NaN ?? "False") // Nan
console.log(true ?? "False") // true
console.log(false ?? "False") // false


// -----------------------------
console.log("")
console.log("----------------")
console.log("")
// Acceso condicional a un atributo del objeto

const persona = {
  nombre: 'Bernardo',
  apellido: 'Ocampo',
}

if (persona?.domicilio?.calle == 18){
  console.log("Es Mayor de edad")
} else{
  console.log("No existe")
}

// Desctructuración

console.log("")
console.log("------- Destructuring ---------")


// Es obteneralgo en específico de un objeto

const producto ={
  nombre: 'Televisor',
  precio: '$500',
  marca:'Samsung',
  disponible: true,
  detalles:{
    peso: "27kg",
    tamaño: "32cm",
    materiales:{
      carcasa:'Plastico',
      pantallar: 'Vidrio'
    }
  },
}

// Destructuracion = no modifica el objeto inicial, solo tomamos los datos.

const usuarioNuevo = {}

const {nombre, disponible, detalles : {tamaño,peso}} = producto; // --> esto es una variable.

console.log(nombre);
console.log(disponible);
console.log(tamaño);
console.log(peso)


// nombre, disponible, detalles, tamaño peso son variables

// en el caso de tener variables declaradas anteriormente con el mismo nombre, hay 2 opciones

// o cambiamos el nombre, o en el destructuring le vamos a poner un alias o renombrar

console.log("")

const descripcion = 'Notebook'

const objeto = {
  descripcion: 'Laptop',
  valor: '$600',
  brand:'HP',

}

// Para poder renombrar se coloca los : seguido del nombre de la variable "nombreNuevo"

const {descripcion : nombreNuevo, valor, brand} = objeto

console.log(descripcion);
console.log(nombreNuevo);