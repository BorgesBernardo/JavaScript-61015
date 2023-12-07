
const inputNombre = document.querySelector("#nombreProducto");
const inputCantidad = document.querySelector("#cantidadProducto");
const botonAgregar = document.querySelector("#boton");
const listado = document.querySelector("#listado")

let listaDeProductos = JSON.parse(localStorage.getItem("productos")) ; // guardamos en la variable lo que está dentro del Local Storage - Guarda en un array

if (!listaDeProductos){
  
  listaDeProductos=[]
  
}

  listaDeProductos.forEach((element) => {
  
    let item = document.createElement("li");
    item.innerText = `Producto: ${element.producto}, cantidad: ${element.cantidad}`;
  
    listado.append(item);
  });
  
  
  botonAgregar.addEventListener("click",cargarProducto);
  
  function cargarProducto(){
  
    let item = document.createElement("li");
    item.innerText = `Producto: ${inputNombre.value}, cantidad: ${inputCantidad.value}`;
  
    listado.append(item);
    
    const articulo = {producto: inputNombre.value, cantidad: inputCantidad.value}
  
    listaDeProductos = [...listaDeProductos, articulo];
  
    localStorage.setItem('productos', JSON.stringify(listaDeProductos));
    
  
  };


  //Boton enviar pedido al finalizar la carga

  const botonEnviarPedido = document.querySelector(".boton_pedido");
  const contenedor = document.querySelector(".main")

  botonEnviarPedido.addEventListener("click",enviarPedido);

  function enviarPedido (){
  listaDeProductos = [];
  listado.innerHTML = "";
  localStorage.setItem('productos',JSON.stringify(listaDeProductos));

    mensajePedido();
  
}

function mensajePedido(){
  contenedor.innerHTML = "<h3> Muchas gracias por elejirnos, su pedido estará listo para que lo retire. </h3>"
}





