//---Ciclo for. Permite iterar sobre un bloque de codigo, evaluando condicionales e incrementando un contador.

//ciclo for con variable local
for (let cuenta = 1; cuenta <= 5; cuenta++) {
    console.log(cuenta);
}

//Ciclo for con variable global
let numeroDecremento = 5;

for (numeroDecremento; numeroDecremento >= 1; numeroDecremento--) {
    console.log(numeroDecremento);
}

//Sumar todos los numeros del 1 al 100 = 5050

let suma = null;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);

// Ciclo for para recorrer un Array
const ch43 = ['miriam', 'alan', 'miguel', 'mitzi', 'juan', 'liz', 'diego', 'mariscal', 'emily', 'arturo', 'sadrak', 'josue', 'saul', 'fernando', 'oscar', 'salvador', 'erick', 'monica', 'cristian', 'felipe', 'pablo', 'cintia', 'brandon'];
for (let i = 0; i < ch43.length; i++) { //este empieza en 0 porque es el index
    console.log(ch43[i]);
}
// Ciclos para Array: `for in` (devuelve índices) y `for of` (devuelve los elementos del Array)
for (let developer of ch43) {
    console.log(`Hola soy el desarrollador/a ${developer}`);
}
for (let developer in ch43) {
    console.log(developer);
}

//Encontrar los numeros pares del 247 al 361
for (let i = 247; i <= 361; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es numero par`);
    }
}

//---Ciclo While. Permite recorrer un bloque de codigo mientras se cumpka una condicion
//Realizar una cuenta del 1 al 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
/* Otra manera de realizar las instrucciones
let i = 0;
while (i < 5) {
    i++;
    console.log(i);
}
*/

//Tomando nuestro Array de ch43, mostrar los elementos utilizando un ciclo while
let developer = 0;
while (developer < ch43.length) {
    console.log(ch43[developer]);
    developer++;
}

//Imprimir una secuencia de asteriscos, desde 1 a 5 asteriscos
let limite = 5;
let inicio = 0;
let asterisco = '';

while (inicio < limite) {
    asterisco += "*";
    console.log(asterisco);
    inicio++;
}

//---Ciclo Do-While. Recorre un bloque de codigo mientras se cumpla una condicion especifica, pero antes de evaluar dicha condicion ejecuta al menos una vez la instruccion
let j = 0;
do {
    console.log(j);
    j++
} while (j < 5);

let k = 1;
do {
    console.log(k);
    k++;
} while (k <1); //en este tipo de ciclo si imprime el 1 porque evalua hasta el final!!

//****Control de ciclos*****
//Existen dos sentencias que nos permiten controlar los ciclos: break y continue. Break detiene un ciclo en un punto específico y continue permite que el ciclo continúe pero ejecutando una acción específica en un punto dado.
let n = 0;
while (n < 100) {
    n++;
    console.log(n);
    //Sentencia break
    if (n === 22) {
        break;
    }
}

for (let contador = 1; contador <= 10; contador++) {
    if (contador === 5) {
        console.log(`Cliente ganador`);
        continue; //sustituye el valor indicado por lo que queremos que imprima y continua
    }
    console.log(`Cliente número ${contador}`);
}

//**** RETOS *****/

//RETO 5. Crear un bucle para imprimir numeros primos
//for (m = 0; m < 100; m++){
//    if (m % 2 !== 0 && (m / m = 1)){
//        console.log(m);
//    }
//}

for (let m = 1; m < 100; m++) {
    let numPrimo = true;
    for (let n = 2; n * n <= m; n++) {
        if (m % n === 0) {
        numPrimo  = false;
        break;
        }
    }
    if (numPrimo) {
    console.log(m);
    }
}

//RETO 6. Crear un bucle while que calcule la suma de los primeros n numeros enteros positivos: 
//suma = 1+2+3+n
//Ejemplos: 
//n=5, suma 15
let x = 19;
let suma2 = 0;
let contador = 1;

while (contador <= x) {
    suma2 += contador;
    contador++;
}
console.log(suma2);

// retos 3 y 4
//let variable = prompt("Por favor, ingresa un valor:")
let variable = 10;
let x1 = 1;
while( x1 <= variable){
    console.log(`[${x1}]`);
    x1++;
}

let k1= 1;
cuenta = 0;
for(k1=0; k1<=100; k1++){
    if(k1===13){
        break;
    }
    if(k1 % 2 ===0){
        continue;
    }
    cuenta++;
    console.log(k1);
}
console.log(`hay ${cuenta} numeros impares`);

//RETO 1
//Personas esperando en la fila 
let personaEnfila = ['Sofia', 'David', 'Juan'];
personaEnfila.push('Sara', 'Agustin');
console.log(personaEnfila);
 //Se elimina el nombre de la primer persona  de la lista
personaEnfila.shift('Sofia');
console.log(personaEnfila);
//Con .unshift se agrega a Renata al inicio de la fila. Con .push se agrega Elena al final de la fila 
personaEnfila.splice(1,0, "Renata");
personaEnfila.push('Elena');
console.log(personaEnfila);

/* RETO 2 */
/* Imprima repetidamente el valor de la variable xValue, diminuyendolo en 0.5 cada vez, siempre que xValue siga siendo positivo*/
let xValue = 5;
while(xValue >= 0.5){
    xValue -=0.5;
    console.log(xValue);
}