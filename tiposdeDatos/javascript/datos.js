/*Variables
var: podemos declarar una variable sin inicializarla. Ya no es tan utilizada porque tiene un alcance global (dentro de todo mi codigo tiene alcance) lo que podia dar un error.

let: podemos declararla sin inicializarla, tiene un alcance local(dentro del pedazo de codigo donde esta). Es una buena practica utilizarla y es de las mas utilizadas.

const: Se refiere a una constante, tiene un valor que no va a cambiar. La variable se debe inicializar al momento de declararlo.

scope se refiere a la accesibilidad de las variables y funciones dentro de distintas partes de mi codigo. El scope determina el tema de la accesibilidad, es decir, donde y como vamos a manipular las variables de mi programa. (Perfiles de Netflix kids...)

Declarar una variable se refiere a decirle a mi programa que la variable existe o esta ahi utilizando var, let y const y de esta manera reservar este espacio de memoria.

Inicializacion se refiere a agregarle un valor inicial como su nombre lo dice.

let nombre = "Miri";
*/

/*Tipos de datos

datos primitivos: son los mas basicos dentro de un lenguaje de programacion, es decir, ya venian con el lenguaje.
    string: cadena de texto, secuencia de caracteres acotados por "comillas"  
                let edad = "32"; (esto es texto)
    number: se refiere a valores numericos, los datos NO llevan "comillas"  
                let edad = 32;
    boolean: se refiere a un valor booleano y que solo nos da verdadero o falso 
                let ine = true;
    null: se refiere a la ausencia o falta de algun valor. No tiene valor especifico, solo esta existiendo. 
        Nosotros lo declaramos a proposito.
                let comensal=null
    undifined: se refiere a una variable que se declaro pero no se ha inicializado. No sabemos que va a ir ahi.
                let comensal;
*/

/*const nombre = "Miri";
console.log(nombre);*/

/*let nombre ;
nombre = "Claudia";
console.log(nombre);*/

/*Encasillamiento es el proceso de conversion automatica o implicita de valores de un tipo de dato a otro

*/
let edad = 32;
let primaveras = "32";
//coercion implicita
let operacion = edad + primaveras;
console.log(operacion);
let bendis = 3;

//coercion explicita
let operacion2 = edad + Number(primaveras); //number es una var que cambia a numero lo que le ponga
console.log(operacion2);

//Multiples variables
//let nombre1 = "Dani", nombre1 = "Felipe", nombre1 = "Josue"; ESTA ES OTRA FORMA DE TENER EL MISMO RESULTADO
/*let nombre1, nombre2, nombre3; ESTA ES OTRA FORMA...
nombre1 = "Dani";
nombre2 = "Felipe";
nombre3 = "Josue";*/

//ESTA 3ER FORMA ES LA MAS RECOMENDABLE DE USAR POR LA FACILIDAD DE VISUALIZAR LOS DATOS:
let nombre1 = "Dani";
let nombre2 = "Felipe";
let nombre3 = "Josue";

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

//typeof es un metodo que nos permite saber que tipo de dato es el que tenemos
console.log(typeof(nombre1));

let comensal;
console.log(typeof(comensal));

//Conversion de datos:
//*de numbers a strings con String o con el metodo .toString() los ()son por los parametros
console.log(String(edad));
console.log(typeof String(edad));
console.log(typeof bendis.toString());

//*de string a number con Number, el metodo parseInt o el metodo parseFloat
let cambioNumber = console.log(typeof Number(primaveras));
metodoParseInt = console.log(typeof parseInt(primaveras)); //esto indica un metodo(metodoParseInt) no una funcion
metodoParseFloat = console.log(typeof parseFloat(primaveras));

//metodo y funcion no es lo mismo pero trabajan de forma parecida. Una funcion podemos llamarla sin haberla inicializado. Un metodo si necesita que le demos parametros de entrada.


//*de boolean a number
let ine = true;
let cambioBoolean = console.log(Number(ine));
console.log(typeof parseInt(ine));
console.log(typeof parseFloat(ine));
console.log(parseFloat(ine));
console.log(typeof ine.toString());

//Concatenar se refiere a unir strings
let nombre4 = prompt("Holi");
alert("Hola " + nombre4);

//Ejemplo
let producto = prompt("Ingresa el costo del producto: ");
let cantidad = prompt("Ingrese el numero de productos solicitados ");

let resultado = producto + cantidad;
alert(resultado);

//let costoTotal = Number(producto) * Number(cantidad);
let costoTotal = parseFloat(producto) * parseFloat(cantidad);
alert(costoTotal);