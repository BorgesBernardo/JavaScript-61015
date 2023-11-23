// Agregar al carrito del super la lista de productos a comprar Deben contener nombre y cantidad
// El finalizar la carga, se mostrará la lista de los productos cargados
// Dar un mensaje final de "el pedido te estará esperando para ser retirado"



alert("Bienvenido a tu Market Point");

let respuesta = prompt ("Desea realizar un pedido, ingrese Si para agregar productos, ESC para salir");

const Productos = [];

class Producto {
  constructor(nombre, cantidad){
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}

if (respuesta === "Si" || respuesta === "si" ){

  const totalArticulos = parseInt(prompt("Cuantos productos desea agregar al carrito"));

  while("Si" || "si"){

    for (let i = 0; i < totalArticulos; i++){

    const nombreProducto = (prompt("Ingrese el nombre del producto"));
    const cantidadProducto = (parseInt (prompt("Ingrese la cantidad")));
  
    const nuevoProducto = new Producto (nombreProducto,cantidadProducto);
  
    Productos.push(nuevoProducto);
  
    }

    respuesta = prompt("Desea ingresar otro producto? Si desea salir presione (ESC)");

    if(respuesta === "No" || "no"){
      let nuevaVariable = 'Usted compro: ';
  
      const listaProductos = Productos.forEach((producto)=>{
      
        (nuevaVariable += (`${producto.cantidad} unidad de ${producto.nombre + '  '}`))
      
      })
      
      alert(nuevaVariable);
      
      const totalCantidad = Productos.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
      alert(`La cantidad total de articulos es: ${totalCantidad}`);
      alert('Muchas gracias, su pedido estará listo para ser retirado.');
    }

    break;
  }

} else{
  alert("Muchas gracias por visitarnos, hasta luego.");
}



























