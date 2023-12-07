// DOM --> Modelo de objetos del documento

// Es la representación de html y css del lado de js
// Esta basado en nodos (etiquetas) y compuestas por una jerarquía.
// <head> <body>, y dentro de de estas las etiquetas hijas <div> <p>
// cada nodo es un elemento/etiquetoa que dentro de js es un objeto


// Se puede acceder a través de:

// ID      --> document.getElementById
// Clases  --> document.getElementsByClassName
// Nodo    --> document.getElementsByTagName

/*
console.log (document.body); // muestra todo el html como etiqueta
console.dir (document.body); // lo muestra como un objeto y todos sus atributos


console.log(" ---------- Elemento by ID ----------")
console.log("");
// Obtener elemento del html a través del ID

const elementoId = document.getElementById ( "titulo" ); // retorna el nodo H1 con ID = Titulo

console.log (elementoId); // retorna el nodo completo
console.dir (elementoId); // retorna el nombre del nodo, # que tiene id, y .titulo que tiene clase

console.log (elementoId.classList); // retorna la o las clases del nodo
console.log (elementoId.id); // retorna el id
console.log("");

console.log(" ---------- Elemento by Clases ----------")
console.log("");

// Machea con los nombres tal cual está en el html
// siempre retornara un array, porque varios nodos pueden usar la misma clase
const elementoClass = document.getElementsByClassName ("subtitulo"); 

console.log(elementoClass); // retorna array con 2 elementos que comparten la clase
console.dir(elementoClass);

console.log("");
console.log(" ---------- INNER TEXT ----------")
console.log("");

// El Innert Text, es el texto que contiene mi nodo

const parrafo = document.getElementById ("texto");

console.log(parrafo.innerText); // me devuelve el texto que contiene el nodo

parrafo.innerText = 'Cambiado a través de JavaScript'; // cambia en pantalla el texto, lo pisa.

console.log(parrafo.innerText); // me retorna en consola el texto cambiado a traves de js


console.log("");
console.log(" ---------- INNER HTML ----------")
console.log("");

// Manipula todo el contenido HTML


const parrafo2 = document.getElementById ("contenedor");

console.log(parrafo2);
console.log(parrafo2.innerHTML); // me va a mostrar como string el html de los hijos del nodo llamado

// Modificará los hijos del nodo llamado.
// Lo que modifique en .innerHTML lo va a mostrar como html
// No va a modificar el archivo original, solament lo muestra en el navegador

// parrafo2.innerHTML = '<h1> Este titulo Se cambio con JavaScript pisando todo lo demas </h1>' // pisa el original mostrando el nuevo h1



console.log("");
console.log(" ---------- AGREGAR NODOS ----------")
console.log("");

const divNuevo = document.createElement ("div"); // esto crea un nodo al aire vacio en la variable divNuevo

divNuevo.innerHTML = '<p> Soy un elemento creado por JS </p>'; // crea el elemento p dentro del div creado en la variable "nuevoDiv"

const contenedorPadre = document.getElementsByClassName ("contenedor");

contenedorPadre[0].appendChild(divNuevo); // inserta el div creado por js y lo inserta en el html al nodo llamado por clase "contenedor"

// el appendChild inserta al final del contenedor en el cual vamos a insertarlo.
// La posición 0 del array hace referencia a la ubicación del contenedor padre con la clase "contenedor"



// Agregamos un input

const divNuevo2 = document.createElement ("div");

divNuevo2.innerHTML = '<input value="Bernardo Borges" id="inputA"> </input>';

const contenedorPadre2 = document.getElementsByClassName ("contenedor");

contenedorPadre2[0].appendChild(divNuevo2);

console.log(document.body);





console.log("");
console.log(" ---------- ELIMINAR NODOS ----------")
console.log("");

// Se elimina directamente el elemento que queremos borrar

const parrafo3 = document.getElementsByClassName ("texto3");

parrafo3[0].remove(); // eliminado el nodo con la clase texto3 que está en la posición 0



console.log("");
console.log(" ---------- OBTENER ELEMENTOS POR SELECTORES (CSS) ----------")
console.log("");

// Selectores = #:ID / ".": clases / <h1>: etiqueta como tal

// querySelector = devuelve UN SOLO elemento y el primero que cumpla con el selector
// document.querySelector("#id"); / document.querySelector(".class"); / document.querySelector("h1");

// querySelectorAll = devuelve un ARRAY con todos los elementos que cumplen con el selector
// document.querySelectorAll("#id"); / document.querySelectorAll(".class"); / document.querySelectorAll("h1");

// se guarda en variables

//Ej: const variable = querySelectorAll(#prueba);


console.log("");
console.log(" ---------- VALORES DE UN INPUT ----------")
console.log("");


const inputPato = document.querySelector ("#inputA"); // llamamos por el ID

console.log(inputPato); // muestra el input como HTML

console.log(inputPato.value); // muestra el value que tiene declarado el input

inputPato.value = "Pato Borges"; // cambiamos el valor de inputPato

console.log(inputPato.value); // muestra el nuevo valor que piso al anterior

*/

//Ejercicio: agregar un objeto a un div nuevo creado todo por javaScript

let producto = {
  id: 1,
  nombre: "arroz",
  precio: 20
}

let contenedor = document.createElement ("div");

contenedor.className = "prueba"

contenedor.innerHTML = `<br>
                        <h5> ID: ${producto.id}</h5>
                        <p> Nombre: ${producto.nombre}</p>
                        <p> Precio: ${producto.precio}</p>`;

const contenedorPadre = document.getElementsByClassName ("contenedor");

contenedorPadre[0].appendChild(contenedor);