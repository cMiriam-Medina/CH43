/*
Por cada $200 de compra se iba a aplicar un 10% de descuento (acumulable hasta $800).

Monto = x
descuento = 10%
totalDescuento = monto/200
descuentoTotal = (totalDescuento* descuento)* monto


Algoritmo
Mostrar mensaje solicitando el monto de la compra (prompt)
si es monto es < 800 
Realizar operacion para obtener el descuento
Obtener la cantidad a descontar
Mostrar el total con el descuento aplicado
*/

let monto = Number(prompt("Ingrese monto total de su pedido"));
let descuento = 0.1;
let porcentajeDescuento = 0;
if (monto < 800){
    porcentajeDescuento = parseInt(monto/200);
}else{
    porcentajeDescuento = 4;
}
montoDescuento = monto * (porcentajeDescuento * descuento);
total = monto - montoDescuento;
alert("Este es el total de tu compra: " + total);