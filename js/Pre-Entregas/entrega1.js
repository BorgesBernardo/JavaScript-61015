
// Prompt
// if o swicht
// for o while
// funciones


// Ejercicio: Calcular pagos en cuotas sobre un monto determinado.

function subResultado (monto,cuota){

  return monto/cuota;

}

let respuesta = prompt('Ingrese "Si" para ingresar y "No" para salir');


while(respuesta == "Si" || respuesta == "si"){

  const monto = parseInt(prompt('Ingrese un monto en $'));
  const cuota = parseInt(prompt('Ingrese la cantidad de cuotas que quiere abonar el monto ingresado'));

  if (cuota <= 0){
    alert("La cantidad de cuotas debe ser mayor a 0");
  } else {
    const resultado = subResultado(monto, cuota);

    let mensaje = "Deberias pagar " + cuota + " cuotas de $" + resultado;
    alert (mensaje);
  }


  respuesta = prompt("Desea ingresar otro monto? Si desea salir presione (ESC)");
}



