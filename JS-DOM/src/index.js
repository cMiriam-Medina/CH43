//Accediendo a los diferentes elementos del documento HTML utilizando s etiqueta, su clase p su id

//Acceder mediante el id: document.getElementById("id");
const tituloH1 = document.getElementById('title1');
const tituloH2 = document.getElementById('title2');

console.log(tituloH1); //trae el elemento completo (con etiqueta y atributos)
console.log(tituloH2);
console.log(tituloH1.innerText); //Recupero solamente el texto que vive entre el elemento. Output: Dom Manipulation

//Acceder a los elementos mediante clases: document.getElementByClassName ('class');
const titulos = document.getElementsByClassName('title');
console.log(titulos); //Me muestra todos los elementos de la misma clase como una coleccion HTML
console.log(titulos.length); //Output:4
console.log(typeof titulos); //Output: Object

//Acceder a los elementos medinte su etiqueta: document.getElementByTagName ('etiqueta');
const titulosH3 = document.getElementsByTagName('h3');
console.log(titulosH3); //Muestra los elementos con la etiqueta h3

//Accediendo a elementos mediante selectores CSS (. #). Utilizamos querySelector y nos permite acceder al primer elemento de una clase o al elemento de cierto id
const titulo4 = document.querySelector('#title4');
console.log(titulo4);

const titulo = document.querySelector('.title');
console.log(titulo);

//querySelectorAll('');
const titulosQuery = document.querySelectorAll('.title');
console.log(titulosQuery);

//-- Modificando los elementos mediante manipulación del DOM
tituloH1.style.textAlign = "center";
tituloH1.style.color = "#e1523D";

// Modificar el texto existentre de un elemento con un innerText para acceder y modificar el texto de un elemento
tituloH2.innerText = "Sesión de manipilación del DOM con JS";
tituloH2.style.color = "#C2BB33";

/* -- Crear nuevos elementos como 
/* -- Crear nuevos elementos como nodos. Este proceso se divide en dos: crear el nodo y agregar el nodo.
*   - Crear nodos:
        document.createElement('tipoElemento'); ----> Crear elementos a partir de etiquetas
        document.createTextNode('string'); ----> Crea texto dentro de las etiquetas
*   - Insertar los nodos 
        parentNode.appendChild(node);
        parentNode.append(node);
        parentNode.insertBefore(node);
        parentNode.insertAdjacentElement(node);
*/

const tituloH4 = document.createElement('h4'); //Creando elemento h4
const imgNode = document.createElement('img'); // creando elemento img

const textoTituloH4 = document.createTextNode('Imagen agregada desde el DOM'); //Creando el texto que vive detro del nodo tituloH4

// -- Tengo creados dos nuevos elementos  (nodos) h4 y img. Hay que agregarlos como nodos hijos de un nodo padre
//1. Obtengo el nodo padre (parentNode) mediante su id: 'img--container';
const imgPadre = document.getElementById('img--container');

//2. Agrego el texto creado al nodo creado (h4)
tituloH4.appendChild(textoTituloH4);

//3. Mandar a llamar el parentNode (imgParent) e insertar los nodos hijos (h4 y img)

imgPadre.appendChild(tituloH4);
imgPadre.style.color = '#A1C7E0';

//4. Agregamos las propiedades necesarias para configurar el nodo de imagen
imgNode.src = '../public/bobross.png';
imgNode.width = '300';
imgNode.alt = 'Lego Bob Ross';

//5. Agregando la imagen al parentNode (imgPadre);
imgPadre.appendChild(imgNode);

//outerHTML. Nos permite visuaizar el elemento, es otra manera de visualizacion
let infoH4 = tituloH4.outerHTML;
console.log(infoH4);