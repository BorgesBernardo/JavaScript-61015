// Funciones de orden superior II

// Método MATH -> es un contenedor de herramientas y métodos

console.log("------------ OBJETO MATH ------------");

console.log(Math.E);
console.log(Math.PI);


// Propiedades del MATH

//Math.max, es un método que recibe parámetros numéricos y nos devolverá el mayor valor

const maximo = Math.max(5,10,200,18,2);

console.log (maximo); // 200


//Math.min, es un método que recibe parámetros numéricos y nos devolverá el menor valor

const minimo = Math.min(5,10,200,18,2);

console.log (minimo); // 2

//Math.ceil, es un método que redondea para el más proximo para arriba

const ceil = Math.ceil(5.12);

console.log ('Redondeo para arriba',ceil); // 6

//Math.floor, es un método que redondea para el más proximo para abajo

const floor = Math.floor(10.99);

console.log ('Redondeo para abajo',floor); // 10

//Math.round, es un método que redondea, en el caso de ser ".5"

const redondeo = Math.round(8.6);

console.log ('Redondeo',redondeo); // 9

//Math.random, es un método que nos dará un número aleatorio entre el 0 y el 1

const aleatorio = Math.random();
const aleatorio2 = Math.random()*10; // de 0 a 10
const aleatorio3 = Math.random()*20 + 20; // de 20 a 40

console.log ('Número aleatorio',aleatorio);
console.log ('Número aleatorio de 0 a 10',aleatorio2);
console.log ('Número aleatorio entre 20 y 40',aleatorio3);



console.log("------------ OBJETO DATE ------------");


const fecha = new Date();
console.log (fecha);

console.log(fecha.getDay());

const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'];

console.log(dias[fecha.getDay()]); // muestra el día en el que estamos

console.log(fecha.toLocaleDateString());

const fechaLocal = fecha.toLocaleDateString();
const fechaSeparada = fechaLocal.split("/") // --> lo va a tomar como separador

console.log(fechaSeparada);

const fechaJunta = fechaSeparada.join(".") // --> va a juntar el string con "-"
console.log(fechaJunta);

// Método Replace

const fechaJunta2 = fechaLocal.replace ("15/11/2023", "15-11-2023");

console.log(fechaJunta2);

console.log("------------ Actividad ------------");


// Realizar un log in validando las credenciales de una base de datos

// 1 paso: pedir datos (usuario y contraseña)
// 2 paso: validar datos contra la base de dato, verificar
// 
// 


const baseDatos = [

  {
    usuario:"bernardo",
    contraseña:"bernardo123"
  },
  {
    usuario:"juan",
    constraseña: "juan897"
  },
  {
    usuario:"tomas",
    contraseña: "tomas147"
  }

]

const user = {
  usuario: "",
  contraseña: ""
}

user.usuario = prompt("Ingrese usuario");
user.contraseña = prompt ("Ingrese contraseña");

let siExiste = baseDatos.find((elemento) =>{
  return user.usuario === elemento.usuario && user.contraseña === elemento.contraseña;
});

while (!siExiste){
  alert("Datos ingresados incorrectos");

  user.usuario = prompt("Ingrese usuario");
  user.contraseña = prompt ("Ingrese contraseña");

  siExiste = baseDatos.find((elemento) =>{
    return user.usuario === elemento.usuario && user.contraseña === elemento.contraseña;
  });

}

alert("Bienvenido " + user.usuario);
