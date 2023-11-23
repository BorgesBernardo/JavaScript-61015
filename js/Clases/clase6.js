// Arrays

// es una variable que dentro va a tener un conjunto de elementos 
// que podemos agrupar, podemos mezclar string, numeros, boolean

const array = ['Bernardo', 33, true, 'Borges',12,false,'nano'];

const arrayVacio =[];

array[0]; // Bernardo

console.log(array[0]);

console.log('La longitud es ' + array.length); // método para conocer la canitdad de elementos del array

for(let i = 0; i < 4 ; i++){
  array [i];
  console.log(array[i]);
}

for(let i = 0; i < array.length ; i++){ // utilizamos .length cuando no sabemos el tamaño del array
  array [i];
  console.log(array[i]);
}


console.log("---------------------")
console.log("Métodos para agregar elementos")

// Metodo --> Push / unshift
// Agregar elementos al array

console.log(array); // 4 elementos

const nombreUsuario = "Daniel";

array.push(nombreUsuario); // agrega a la variable nombreUsuario al final del array

console.log('push', array); // 5 elementos.

const usuarioCompleto = {
  nombre: "Tomas",
  edad: 28,
}

array.push(usuarioCompleto); // agrega al final el objeto

console.log('push', array);

const valor = 654;

array.unshift(valor); // Agrega un valor al princiío empujando a todos una posición

console.log('unshift', array);




console.log("---------------------")

console.log("Métodos para eliminar elementos")

// Metodo ---> Pop
// Eliminar elementos del array


array.pop(); // Elimina el último elemento del array (Objeto)

console.log('pop', array);

array.shift(); // Elimina el primer elemento del array (654)

console.log('unshift', array);


// Splice ---> Elimina un rango de elementos recibiendo 2 paramétros
// El primero es el índice desde donde comienza y el segundo es la cantidad

array.splice (1,3); // Elimina desde el índice 1, 3 elementos en adelante (33, true, "borges")

console.log('splice', array);



console.log("---------------------")
console.log("Métodos para unir arrays")



// Join que une elementos a través de un string

const unionDeArrays = ['Daniel', 'Gomez','33']

const nuevoArray = unionDeArrays.join(' / '); // te une los elementos del arrays con lo que pases como parámetros

console.log(nuevoArray);



// Concat --> concatena arrays.

const perros = ['ringo', 'roma', 'puchi'];
const gatos = ['mimi', 'kitty', 'garfield'];

const arrayConcat = perros.concat(gatos); // Genera un array nuevo

console.log(arrayConcat);
const nuevoArray2 = arrayConcat.join(' / ');
console.log(nuevoArray2);


console.log("---------------------")
console.log("Métodos para copiar arrays")


// Slice --> devuelve una copia de una parte del arrays.
// Tiene 2 parámetros, el primero el inicio desde donde quiere la copia
// El segundo hasta donde quiero, SIN incluir el último elemento/indice

const sliceArray = arrayConcat.slice(2,5); // Devuelve una copia del array sin modificar el original

console.log(sliceArray); // copia del rango
console.log(arrayConcat); // arrays original

const nuevoArray3 = ['monitor', 'teclado', 'mouse','computadora','parlantes'];

console.log(nuevoArray3);

const productoComputadora = nuevoArray3.slice(-3); // muestra los últimos 3 elemejos

console.log(productoComputadora);

const productoComputadora2 = nuevoArray3.slice (1,-2);
// muestra desde el primer parámetro (1) y la cantidad asignada en el segundo (2)

console.log(productoComputadora2);



console.log("---------------------")
console.log("Métodos para devolver el índice de un elemento del arrays")


//indexOf --> devuelve el índice del elemento

const indice = nuevoArray3.indexOf('computadora');

console.log('indexOf', indice);



// Combinación de indexOf y slice para elimitar un elemento particular

const array4 = ['Mariana', 'Luisina', 'Gabriela', 'Victoria'];

console.log(array4);

const indice2 = array4.indexOf('Gabriela');

console.log(indice2);

const nuevoArray4 = array4.splice(indice2, 2); // Elimina Desde indice2 (gabriela) muestre 2 elementos hacia adelante

console.log(nuevoArray4);



console.log("---------------------")
console.log("Método Includes")


// Método Includes --> nos va a devolver un booleano si el elemento existe en el array

const array5 = ['moto','auto','monopatin','bicicleta']

const includes = array5.includes('pichichu');
// Como monopatin existe me devuelve un true, si pusiera otra palabra que no estuviera
// en el array me devolvería false

console.log(includes);

if(array5.includes('pichichu')){
  console.log('El elemento existe')
} else{
  console.log('No existe el elemento')
}

console.log(includes); // No existe el elemento porque pichichu no existe en el array5


// En el caso de que haya mas de un pichichu, te devolverá true, porque al menos existe uno
// Te devuelve el primero, con el primero que hace match.


console.log("---------------------")
console.log("Método Reverse")


// Reverse --> simplemente da vuelta el arrays

console.log (array5);

const reverse = array5.reverse(); // modifica el array original y lo invierte

console.log('reverse',reverse);





console.log("---------------------")
console.log("Ejercicio")


// Se necesita cargar productos a mi ecommerce
// donde cada producto necesito saber nombre, precio, categoría, peso, marca
// Cargar 3 elementos


// 1° necesito array para almacenar los productos
// 2° objetos con constructor
// 3° como son 3 elementos necesito un for para iterar 3 veces
// 4° cada iteración meto push


const productos = [];

class productoSiri{
  constructor(nombre, precio, categoria, peso, marca){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.peso = peso;
    this.marca = marca;
  }
}



for(let i = 0; i < 3; i++){
  const nombre = prompt('Ingrese nombre del producto');
  const precio = parseInt(prompt('Ingrese precio del producto'));
  const categoria = prompt('Ingrese categoria del producto');
  const peso = parseInt(prompt('Ingrese peso del producto'));
  const marca = prompt('Ingrese marca del producto');

  const nuevoProducto = new productoSiri(nombre, precio, categoria, peso, marca);
  productos.push(nuevoProducto);
}

console.log(productos);






