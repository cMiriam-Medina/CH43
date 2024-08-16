/** Definicion de funciones
Una funcion es un bloque de codigo que se ejecuta cada que yo lo mande a llamar, va a contener distintas instrucciones con base en lo que yo necesite

 */
function recomendacion () {
let clima = prompt("Que tal el clima el dia de hoy? ");
if (clima == 'soleado') {
    alert ('Usa bloqueador solar');
} else {
    alert ('Ponte sueter');
}
}

// recomendacion ();
// recomendacion ();
// recomendacion ();

function saludar () {
    console.log('Hola desde una funcion');
}

saludar ();

// function carritoMensaje(nombre, cantidadProductos) {
//     let carritoMensaje = `Hola ${nombre} tienes ${cantidadProductos} productos en tu carrito, procedemos al pago?`;
//     alert (carritoMensaje);
// }

// let nombre = 'null';
// let cantidadProductos = 0;
// carritoMensaje ('Jorge', 15);
// carritoMensaje ('Mariana', 22);
// carritoMensaje ('Monica', 26);
// carritoMensaje ('Zaihd', 9);

// function carritoMensaje(nombre, cantidadProductos) {
//     mensaje = prompt ('Hola, proporciona tu nombre y la cantidad de productos, por favor')
//     let carritoMensaje = `Hola ${nombre} tienes ${cantidadProductos} productos en tu carrito, procedemos al pago?`;
//     alert (carritoMensaje);
// }

// let mensaje = '';
// let nombre = 'null';
// let cantidadProductos = 0;
// carritoMensaje ();
// carritoMensaje ();
// carritoMensaje ();
// carritoMensaje ();

//funcion con mensaje







//funciones anonimas
// let carritoCompra = function() {
//     let nombre = prompt ('Ingresa tu nombre');
//     let productos = prompt ('Ingresa la cantidad de productos');

//     let mensaje = `Hola ${nombre}, tienes ${productos} productos en tu carrito, procedemos al pago?`;
//     alert (mensaje);
// }

// carritoCompra();


/** Return
 * La palabra reservada return nos indica que estamos devolviendo un tipo de dato al ejecutar nuestra funcion
 * 
 */

function sumar (a, b){
    
    console.log("El resultado de la suma es: ");
    return a + b;
}

let suma = sumar (15, 98);
console.log(suma);

let suma1 = sumar (74, 52);
console.log(suma1);

function bienvenidx(nombre) {
    return 'Hola, ' + nombre + ' ya eres cliente Premium';
}

let aviso = bienvenidx('Saul');
console.log(aviso);


//entonces el siguiente codigo podemos expresarlo con funciones:
let num1 = 15;
let num2 = 25;
let suma2 = num1 + num2;
console.log('El resultado es: ' + suma2);

function suma3(num1, num2){
    let suma3 = num1 + num2;
    return suma3;
}

let resultado = suma3(54, 89);
console.log(resultado);

//***Funciones flecha,**** su sintaxis es mas concisa al no tener que utilizar la palabra reservada function, return y si tengo solo un parametro los parentesis ya no son necesarios al igual que las llaves
const saludo = nombre  => console.log('Hola ' + nombre); //solo uso paraentesis si tengo 2 o mas parametros, por eso nombre no tiene ()

saludo('Felipe');

const multiplicar = (c, d) => c * d;  //la flecha es como indicar un return, por eso me devuelve el valor de esa operacion al imprimirlo 
console.log(multiplicar(12, 36));

//*** Hoisting, eleva la funcion y las variables y las ejecuta
//Es un comportamiento denro de JS que hace que en la declaracion de variables y funciones se eleven al inicio del contexto en el que estan definidas

// //**** Ejercicios:
// */


//1. Crear una función general y función flecha para verificar si un número es par o impar.
function par (num1) {
    if (num1 % 2 === 0) {
    return console.log('Es numero par');
    } else {
    return console.log('Es numero impar');
    }
}

par(2);

const par2 = num2 => {if (num2 % 2 === 0){
    console.log('Es numero par')
} else {
    console.log('Es impar');
}
}

par2(13);
//otra varibale del codigo(Alan)
// function par(num1){
//     modulo = (num1 % 2)
//     if(modulo !== 0 ){
//    console.log(`El númer ${num1} es impar`)
    
//    }else{
//        console.log(`El númer ${num1} es par`)
//     }
    
//    }
//    par(10)

//2. Crear un programa para calcular la edad de una persona al día de hoy. Dicho programa también determina si es mayor o menor de edad. Utiliza función general y función flecha.
// Pista: const today = new Date();

function year(birthday) {
    const today = new Date().getFullYear();
    const age1 = today - birthday;
if (age1 >= 18) {
    console.log("Es mayor de edad");
}else {
    console.log("No es mayor de edad");
}
}
year(2020);

const year1 = birthYear => { const age3 = new Date().getFullYear();
    const age1 = age3 - birthYear; 
    console.log(age1 >= 18 ? "Es mayor de edad" : "No es mayor de edad"); 
} 

year(1997);

// - Crear una función general y función flecha para calcular la edad de un gatito.
//      0 - 2 años gatunos = 24 años humanos
//      1 año gatuno extra = 4 años humanos



function edadGato(edad) {
    edad <= 2 ? console.log('Tu gato tiene 24 anos humanos') : edadNueva = (edad-2) * 4 + 24;
    console.log(`Tu gato tiene ${edadNueva} anos humanos`);
}

edadGato(5);

const edadGato2 = edad => { if (edad <= 2) {
    console.log('Tu gato tiene 24 anos')
} else {
    let edadExtra2 = (edad-2)*4 + 24;
    console.log(`Tu gato tiene ${edadExtra2} anos humanos`);
}
}

edadGato2(3);