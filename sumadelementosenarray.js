//suma de elementos en un array con recursividad
// pseudocódigo
// Inicio
// Recibe un arreglo como parametro  y la posición actual del arreglo
//si la posición actual es menor que la longitud del arreglo
// regresa la posición actual del arreglo más la llamada de la función del arreglo más uno
// de la posición actual
// si no, regresa comentarios
// Fin

function suma_arr(arr,pos){
if (pos < arr.length){
return arr[pos] + suma_arr(arr,pos + 1);
} else{
return 0;
}
}

var pos = 0;
function suma(arr){
  if (pos < arr.length){
    let valor = arr[pos];
    pos++;
    return valor + sumar(arr);
  } else {
    pos = 0;
    return 0;
  }
}
