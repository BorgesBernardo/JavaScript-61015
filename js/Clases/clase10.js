// Eventos


// Ej: quiero ejecutar un bloque cuando suceda el evento click, scroll, escribiendo, etc

// Nos permite ejecutar una función cuando sucede un evento.

// Hay 3 formas que JS nos permite escuchar eventos del usuario


console.log("");
console.log(" ---------- MÉTODO addEventListener() ----------")
console.log("");


const boton = document.querySelector ("#boton");

console.log("boton");

// const funcionClick = function (){
//   console.log("Se ha pulsado el botón.");
// }

//boton.addEventListener("click", funcionClick) // recibe 2 parámetros: 1° el nombre del evento en string, y 2° la función

// boton.addEventListener("click", ()=>{console.log("Se ha pulsado el botón.")}); // función flecha como parámetro en vez de valor

console.log("");
console.log(" ---------- EJERCICIO ----------")
console.log("");



//LOGIN
// Permitir loguear a un usuario, validando las credenciales y en base a eso, mostrar una bienvenida
// sino existe, mostrar un error

/*

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

  } else{
    
    const error = document.createElement("div");
    error.innerHTML = '<h5 class="color"> Usuario o contraseña incorrecta </h5>';

    

    const contenedorPadre3 = document.querySelector("#contenedor");
    contenedorPadre3.appendChild(error);

  }


});

*/
