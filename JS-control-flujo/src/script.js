console.log("----------------Control de flujo------------------");

//Declaracion if else
let edad = 10;

if (edad >= 18) {
    console.log("Bienvenidx");
} else {
    console.log("Video Youtube");
} // Input: 19, Outout: Bienvenidx

//edad = 18; //hoisting hace referencia al alcance que puede tener una funcion

//Declaracion if
if (edad >= 10){
    console.log("Puedes usar internet");
} //Input 8, Output: false



//edad = null;
//Para evaluar que un usuario esta ingrsando su edad, podemos utilizar una sentencia condicional que evalua algo diferente a null
if (edad != null) { //para comprobar que mi usuario esta ingresando sus datos
    console.log("El usuario si esta ingresando su edad");
} else {
    console.log("Ingresa tu edad");
}


//Ejemplo con modificacion de una variable. 
//---Crear un programa que determine si nos encontramos en perdidad o en ganancias
let saldoInicial = 500;
let saldoFinal = 900;
let balance;

if (saldoInicial < saldoFinal) {
    balance = "Estamos en ganancias";
} else {
    balance = "Estamos en perdidas";
}

// ECMAScript 6 (ES6) es la version mas actualizada de Javascript. Aqui vamos a tener interpolacion de cadenas, nos permite unir una cadena de caracteres con variable, utilizando backticks `` y ${variables}

console.log("En ese momento " + balance); //Aqui concatenamos
console.log(`En este momento ${balance}`); //Aqui interpolamos cadenas 'backticks'

if (saldoInicial < saldoFinal) {
    balance = `Ganando como siempre`;
} else if (saldoInicial === saldoFinal) {
    balance = `Estamos tablas`;
} else {
    balance = `Perdiendo como nunca`;
}

console.log(`${balance}`);

//--Determinar si un numero es par o impar
numero = 5;
if (numero % 2 === 0) { //usando moddulos y residuo
    console.log(`El numero ${numero} es par`);
} else {
    console.log(`El numero ${numero} es impar`);
}

//Operador ternario. Es una forma concisa de escribir una sentencia condicional (if-else). Se utilizan caracteres para evaluar la condicion y ejecutar los bloques de codigo necesarios. Se usan para 2 condiciones.
//ventajas: menos lineas de codigo, legibilidad, refactorizacion.      Desventajas: con quien trabaje debe saber sobre operadores ternarios, sino no va a funcionar.
//(Condicion) ? true : flase;
//Determinar su un numero es par o impar, pero usando un operador ternario.
let num = 234321;

let parimpar = (num % 2 === 0) ? `El numero ${num} es par` : `El numero ${num} es impar`;

console.log(parimpar);

//Determinar si una persona es un bebe (<=3anos), ninos(4-11 anos), adolescente (12-18 anos), adulto (>18) pero si es un adulto determinar si es un adulto joven (18-59) o adulto mayor (>60).

let edadPersona = 99;
if (edadPersona >= 18) {
    //console.log("Es un adulto");
    //Anidacion de sentencias condicionales (coding hell) porque hay que tener mucho cuidado en como utilizamos el codigo y sus anidaciones. De 3-4 anidaciones todavia esta bien pero mas ya se vuelve ilegible.
    if (edadPersona < 60) {
        console.log("Es un adulto joven");
    } else {
        console.log("Es un adulto mayor");
    }
} else if (edadPersona >= 12) {
    console.log("Es un adolescente");
} else if (edadPersona >= 4) {
    console.log("Es un nino");
} else {
    console.log("Es un bebe");
}

//*********Sentencia switch**********//
//Se utiliza para bloques de codigo grandes. Rara vez se usa, es mas probable que se usen condiciones o funciones.
console.log("*** Switch ***");

//Determinar si el dia de la semana es laborable  (lunes a viernes) o es de descanso (sabado y domingo).
let diaSemana = "sabado";

switch (diaSemana) {
    case "lunes":
        console.log(`El ${diaSemana} es laborable`);
        break; //super importante para que no nos imprima todos los comandos una vez que detecta el caso true
    case "martes":
        console.log(`El ${diaSemana} es laborable`);
        break; //dependiendo de lo que quiera es si pongo break o no
    case "miercoles":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "jueves":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "viernes":
        console.log(`El ${diaSemana} es laborable`);
        break;
    case "sabado":
        console.log(`El ${diaSemana} es de descanso`);
        break;
    case "domingo":
        console.log(`El ${diaSemana} es de descanso`);
        break;
        default:
            console.log("No es un dia de la semana");
}

