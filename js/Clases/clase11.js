// Objeto Storage o Almacenamiento

/*
// Es el lugar del navegador donde nos permite almacenar ciertos datos


console.log("------ Local Storage -------")


// Setear o escribir en el local storage.

// El el local storage, los datos que guardemos se mantendrán para siemre

localStorage.setItem("edad",33); // el primer valor es el atributo y el 2 es el valor

const getItem = localStorage.getItem ("edad"); // devuelve el valor del atributo en string

console.log(getItem);

// localStorage.clear(); // elimina todo en el localstorage

// localStorage.removeItem("edad") // elimina un elemento en particularr

console.log("------ Session Storage -------")

// En el Session Storage solamente se mantendrá los atributos y valores en una pestaña, si cerramos o cambias no está mas la info.

sessionStorage.setItem("nombre", "Bernard Borges")

// sessionStorage.clear()

// sessionStorage.removeItem("nombre")

console.log("------ JSON -------")

// Se utiliza para la transmisión de información entre servidor y cliente

// Para trabajar con arrays u objetos utilizamos de la siguiente forma

const stringify = JSON.stringify({nombre: "bernardo", apellido: "borges"}); // nos permite guardar objetos en el storage

localStorage.setItem("usuario",stringify);

const variable = localStorage.getItem("usuario")

console.log(variable); // retorna el valor de usuario en string

console.log(JSON.parse(variable)); // transforma de string a objeto
*/

console.log("------ EJERCICIO -------")



const BBDD =[

  {
    usuario: "Bernardo Borges",
    contraseña: "Bernardo123"
  },
  {
    usuario: "Luisina Neira",
    contraseña: "Luisina123"
  },
  {
    usuario: "Gabriela Solari",
    contraseña: "Gabriela123"
  },

]


const usuarioALoguear = {
  usuario:'',
  contraseña: ''
}

const valorUsuarioIngreso = JSON.parse(localStorage.getItem("user"));

if(valorUsuarioIngreso) { // ¿Si valorUsuarioIngreso == true

  const saludo = document.querySelector("#contenedor");
  const saludoEnviado = saludo.innerHTML = `<h2> Bienvenido ${valorUsuarioIngreso.usuario} </h2>`
}

const inputUsuario = document.querySelector("#Usuario");
const inputContraseña = document.querySelector("#Contraseña");
const botonIniciar = document.querySelector("#boton");

const valorUsuario = function(e){ // el parámetro "e" o "event" es un objeto donde contiene todos los atributos del evento y del nodo
  //console.log(e.target.value); // ingresamos directamente al valor del input
  usuarioALoguear.usuario = e.target.value;
}

const valorContraseña = function(e){ // el parámetro "e" o "event" es un objeto donde contiene todos los atributos del evento y del nodo
  //console.log(e.target.value); // ingresamos directamente al valor del input
  usuarioALoguear.contraseña = e.target.value;
}

const resultado = inputUsuario.addEventListener("input",valorUsuario);

const resultadoContraseña = inputContraseña.addEventListener("input",valorContraseña);

const acceso = botonIniciar.addEventListener("click",()=>{
  
  
  const usuarioLogueado = BBDD.find((elemento)=> {
    return usuarioALoguear.usuario === elemento.usuario && usuarioALoguear.contraseña === elemento.contraseña;
  })

  const mensajesAnteriores = document.querySelectorAll("#contenedor div"); 
  mensajesAnteriores.forEach((elemento) => {
    elemento.remove(); // Elimina el mensaje "Usuario o contraseña incorrecta" cada vez que hagas click
  })

  if(usuarioLogueado){
    const saludo = document.querySelector("#contenedor");

    const saludoEnviado = saludo.innerHTML = `<h2> Bienvenido ${usuarioLogueado.usuario} </h2>`

    const continuarAcceso = JSON.stringify({usuario: usuarioLogueado.usuario});
    localStorage.setItem("user",continuarAcceso);

  } else{
    
    const error = document.createElement("div");
    error.innerHTML = '<h5 class="color"> Usuario o contraseña incorrecta </h5>';

    const contenedorPadre3 = document.querySelector("#contenedor");
    contenedorPadre3.appendChild(error);

  }


});

