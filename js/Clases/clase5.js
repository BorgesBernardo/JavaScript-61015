
//---- Objetos ----//


//Los objetos son tipos de datos, y se pueden colocar objetos dentro
//de objetos. Por EJ:


const persona = {
  nombre: 'John', //---> nombre es un atributo o propiedad y John es una clave o valor
  edad: 25,
  direccion: {
    calle: "isable",
    numero: 123,
    cp: 12354,
    localidad: {
      nombre: "barracas",
      provincia: "buenos aires",
    },
  },
}


// Como acceder a los valores

// 1° forma = Connotación del punto

persona.edad; // 25
console.log(persona.edad);

persona.direccion.cp; // 12354
console.log(persona.direccion.cp);

// 2° forma = Connotación del corchete

console.log(persona["nombre"]);
console.log(persona["direccion"]["calle"]);
console.log(persona["direccion"]["localidad"]["provincia"]);


console.log("------------------")
//Agregar atributos/propiedad

const persona2 = {
  nombre: "Bernardo",
  edad: 33,
  localidad: "Paraná",
}

console.log(persona2.nacionalidad);

persona2.nacionalidad = "Argentino"; // Sino existe lo crea, y si existe lo pisa

console.log(persona2.nacionalidad);

console.log("------------------")

// Objetos con constructores

// Son una especie de plantilla / template

function Auto() {
  this.marca = "BMW";
  this.modelo = "X1 XDrive";
  this.año = 2018;
}

const bmw = new Auto();
console.log(bmw);

function Auto2(marca,modelo,año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

const volkswagen = new Auto2("vw","polo",2023);
console.log(volkswagen);

volkswagen.año;
console.log(volkswagen.año);



console.log("------------------")
// ----Metodos----//


function Auto3(marca, modelo, año){

  this.marca=marca;
  this.modelo=modelo;
  this.año=año;
  this.aceleracion = function(){
    console.log(`Estoy acelerando`);
  }
}


const ferrari = new Auto3("ferrari", "sp3", 2023)
const porche = new Auto3("porche", "sp3", 2023)

console.log(ferrari);
console.log(porche);
ferrari.aceleracion();
porche.aceleracion();



// ----- Otra manera de crear constructores -----//

class producto{
  
  constructor (nombre, precio, categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  //los métodos se ponen fuera del constructor
  cambiarPrecio(nuevoPrecio){
    this.precio = nuevoPrecio;
  }

}

const arroz = new producto("arroz", 100, "comida");
arroz.precio;
console.log(arroz.precio);

arroz.cambiarPrecio(200); // ejecutamos método para cambiar precio
console.log(arroz.precio);


console.log("------------------")

// Cargar 3 productos y mostrarlos en pantalla
// de cad producto se podra modificar el precio sin alterar a los demas
// también se podra calcula el iva 21% de cada uno

class Producto2{

  constructor(nombre, precio, categoria, peso){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoría;
    this.peso = peso;
  }

  cambiarPrecio(nuevoPrecio){
    this.precio = nuevoPrecio;
  }

  calcularIva(){
    console.log("El precio con IVA es: " + this.precio * 1,21);
    return this.precio * 1,21;
  }

}

const tomate = new producto("Tomate Perita", 50, "Comestible", "1kg");
const galletitas = new producto("Galletitas", 20, "Comestible", "3kg");
const cocaCola = new producto("Coca Cola", 100, "Comestible", "2Lts");

tomate.nombre;
tomate.precio;
galletitas.nombre;
galletitas.precio;
cocaCola.nombre;
cocaCola.precio;

console.log(tomate.nombre);
console.log(tomate.precio);
console.log(galletitas.nombre);
console.log(galletitas.precio);
console.log(cocaCola.nombre);
console.log(cocaCola.precio);

tomate.cambiarPrecio(80);
console.log("El nuevo precio es " + tomate.precio);

galletitas.cambiarPrecio(40);
console.log("El nuevo precio es " + galletitas.precio);

cocaCola.cambiarPrecio(120);
console.log("El nuevo precio es " + cocaCola.precio);

tomate.iva(80);
