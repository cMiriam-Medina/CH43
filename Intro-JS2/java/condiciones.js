/*Operadores aritmeticos:
suma + 
resta -
multiplicacion *
division /
-- decremento
++ incremento


= asigna un valor, es un operador de asignacion
**Operadores de comparacion:
== Operador de igualdad, con este operador vamos a verificar si un valor es igual a otro.
=== Operador de estricta igualdad, se refiere a que no solo sea el mismo valor sino tambien el mismo tipo de dato.

    let edad = 32;
    let primaveras = "32";

    console.log(edad == primaveras);

!= Operador de desigualdad o no igual, se encarga de comparar que no sean iguales o que sean diferentes los valores 
!== Operador de estricta desigualdad


    let edad = 32;
    let primaveras = 32;

    console.log(edad !== primaveras);

< menor que
> mayor que

<= menor o igual que
>= mayor o igual que 


**Operadores logicos:
&& and las 2 condiciones se deben de cumplir para true, sino da false
|| or  con que alguna de las 2 cindiciones se cumpla, nos da true
! not

    let num1 = 12;
    let num2 = 24;
    let num3 = 36;
    let num4 = 65;
    let num5 = 54;

    ejemplo1 = num1 < num4;
    ejemplo2 = num3 == num5;

    console.log(!ejemplo1 || ejemplo2);

    console.log( num3 > num5 && num3 < num5);


*/

let num1 = 12;
let num2 = 24;
let num3 = 36;
let num4 = 65;
let num5 = 54;
let num6 = 21;
let num7 = 14;
let num8 = 8;

operacion = (num8 == num1 && num6 >= num2) || (num3 < num7 || num4 != num5);
console.log(operacion);

/*Ejercicio para poder validar el descuento en nuestro carrito de compra:

Si el total de mi carrito es mayor o igual a $1000, obtendras un descuento del 10%
Si el total de mi carrito es mayor o igual a $500, obtendras un 5% de descuento
Si el total de mi carrito es mayor o igual a $200, obtendras un 2% de descuento
*/
/*
let totalCarrito = 425;
let descuento = 0;
let precioFinal = 0;

if(totalCarrito >= 1000){
    descuento = 0.10;
} else if (totalCarrito >= 500){
    descuento = 0.05;
} else if(totalCarrito >= 200){
    descuento = 0.02;
} else {
    descuento = 0;
}

precioFinal = totalCarrito - (descuento * totalCarrito);
alert(precioFinal);
*/

let totalCarrito = Number(prompt("Ingresa el total de tu carrito: "));
let descuento = 0;
let precioFinal = 0;
let costoEnvio = 189;

if(totalCarrito >= 1599){
    costoEnvio = 0.099
    alert("Felicidades tu envio es gratis!!");
} else if (totalCarrito >= 999){
    descuento = 0.08
    alert("Felicidades obtienes el 8% de descuento!");
} else if(totalCarrito >= 599){
    descuento = 0.02
    alert("Felicidades obtienes el 6% de descuento!");;
} else {
    descuento = 0;
} 

precioFinal = totalCarrito + costoEnvio - (descuento * totalCarrito);
alert("El costo final de tu pedido es: " + precioFinal);