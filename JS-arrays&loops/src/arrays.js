/*----------Creando arrays-------- */
//---Opcion 1. Para inicializar un array puedo escribir de manera directa los elementos dentro de los corchetes
let shopping = ["pan","leche", "queso", "espinacas", "huevos", "carne"]; //6 elementos, index 5

//---Opcion 2. A partir de una array vacio iremos agregando elementos por cada indice
let cars = []; //array vacio
    //agrego elementos llamando al array y el index de cada elemento
    cars[3] = 'volkswagen';
    cars[1] = 'mazda';
    cars[2] = 'nissan';
    cars[0] = 'toyota';

//---Opcion 3. Mandar a llamar el Array como objeto. Al ser un objeto posee su propia clase (Array). Se usa cuando trabajamos con programacion orientada a objetos.
let cantantes = new Array('Luis Miguel', 'Wendy Surca', 'Jose Jose', 'Justin Bieber', 'Los Llayras', 'Los Panchos', 'Molotov');

//Imprimiendo en consola los 3 Arrays
console.log(shopping);
console.log(cars);
console.log(cantantes);

//Como acceder a un elemento del Array mediante su indice
let accesoElemento = `Sebastian se como un ${shopping[0]} mientras conduce su ${cars[2]}`; //Output Sebastian se come un pan mientras conduce su nissan.
console.log(accesoElemento);

/***** Metodos de Arrays ****** */
//Longitud de un Array (.length)
let longitudCantantes = cantantes.length;//Output 7

console.log(longitudCantantes);

//---Acceder al ultimo elemento de cualquier Array (Array.length-1)
let ultimoElemento = cantantes.length-1;
console.log(ultimoElemento); //Output 6
let ultimoElemento2 = cantantes[cantantes.length-1];
console.log(ultimoElemento2);

//Creando un nuevo Array para probar mis metodos.
const ch43 = ['miriam', 'alan', 'miguel', 'mitzi', 'juan', 'liz', 'diego', 'mariscal', 'emily', 'arturo', 'sandrak', 'josue', 'saul', 'fernando', 'oscar', 'salvador', 'erick', 'monica', 'cristian', 'felipe', 'pablo', 'cintia', 'brandon'];

console.log(ch43);

//---pop(): elimina el ultimo elemento del Array
ch43.pop();
console.log(ch43);

//---push(); agregamos un nuevo elemento al final del Array
ch43.push('brandon');
console.log(ch43);

//unshift(); agregar un elemento al inicio del Array
ch43.unshift('alan');
console.log(ch43);

//shift(); eliminar el primer elemento
ch43.shift();
console.log(ch43);

//---slice(); recupera todos los elementos a partir del indice proporcionado
let arraySlice = ch43.slice(16);
console.log(arraySlice);

//---at(); recupera el elemento con el indice dado
console.log(ch43.at(2));

//---Agregando un nuevo elemento al inicio de mi Array, para poder mostrar otro metodo
ch43.unshift('zahid');
console.log(ch43);

//---sort(); ordena un array de manera ascendente tomando como referencia la tabla ASCII
ch43.sort();
console.log(ch43);

//---reverse(); invierte el orden del Array
ch43.reverse();
console.log(ch43);

//---indexOf(); me devuelve el indice del primer valor (elemento) encontrado en un Array
let indiceElemento = ch43.indexOf('cristian');
console.log(indiceElemento);

let indiceElemento2 = ch43.indexOf('zahid');
console.log(indiceElemento2); // -1 no existe el elemento dentro del Array

//---forEach(); me devuelve todos los elementos del array. Itera sobre cada elemento y lo imprime uno por uno
ch43.forEach((developers) => console.log(developers)); //por cada uno de los elementos me imprime los elementos => indica que es una funcion. Es como un for por eso el nombre forEach

//---map(); crea un nuevo Array con los resultados de la llamada a la funcion indicada, aplicado a cada uno de los elementos
const developers = ch43.map((developer) => `Hola ${developer}`);
console.log(developers);

/******* Arrays multidimensionales ********* */
//puedo crear un Array multidimensional combinando 2 o mas arrays
const comidas = ['Tamalito de chipilin', 'Cochinita', 'Lechon', 'Tacos envenedados', 'Guajolota', 'Torta ahogada', 'Carne asada', 'Machetes', 'Enchiladas queretanas', 'Tacos de canasta'];
const estados = ['Cdmx', 'Zacatecas', 'Tabasco', 'Jalisco', 'Chihuahua', 'EdoMex', 'Yucatan', 'Queretaro', 'Tlaxcala', 'Quintana Roo'];

const menu = [comidas, estados];
console.log(menu); // array multidimensional de 2 dimensiones

let shopping2 = [
    ['pan', "verdura", 'salchicha', 'fruta', 'huevos'],
    ['lacteos', 'aceites', 'salsas', 'enlatados'],
    ['congelados', 'mariscos', 'carnes', 'pescados']
];
console.log(shopping2);

//Mandando a llamar un elemento del array multidimensional
let comida1 = (menu[0][1]);//el primero es el indez del array que quiero y el segundo el index del elemento dentro de ese array
console.log(comida1);

let estado1 = (menu[1][6]);
console.log(estado1);

//Manipulando arrays multidimensionales
let producto = `El producto ${shopping2[0][1]} pertenece a la categoria de ${shopping2[2][0]}`;
console.log(producto);
