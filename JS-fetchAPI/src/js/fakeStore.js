//---Voy a mostrar los productos de la Fake Store API en el div vacio edspues de presionar el boton

//Mandar a llamar los elementos para poder manipular el DOM
const botonProductos = document.getElementById('button--store');
const tienda = document.getElementById('store');
let productos = null;
const url = `https://fakestoreapi.com/products`;

//Agregar un evento de ipo click para el boton
botonProductos.addEventListener('click', () => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
        productos = response;
        //Definir funcion con parametros para mostrar los productos (hoisting)
        mostrarProductos(productos);
    })
    .catch(error => console.error(error))
});

//Crear funcion 'mostrarProductos' que nos permite crear, anadir elementos mediante la manipulacion del DOM
const mostrarProductos = productos => {
    productos.map((producto) => {
        //El metodo map me permite recorrer toda la API como si fuera un array de arrays tomando cada producto con el nombre 'producto'

        //1. Crear elementos HTML en donde voy a ir guardando cada parte del producto (//title<h2> image<img> price<h3> description<p> <hr>)
        const titulo = document.createElement('h2');
        const imagen = document.createElement('img');
        const precio = document.createElement('h3');
        const descripcion = document.createElement('p');
        const separador = document.createElement('hr');

        //2. Llenar los elementos creados. Podemos utilizar innerHTML para llenarlo con los datos del objeto. Para ello mandamos a llamar las claves del objeto
        titulo.innerHTML = producto.title;
        imagen.src = producto.image;
        imagen.width = 200;
        precio.innerHTML = `$${producto.price}`;
        descripcion.innerHTML = producto.description;


        //3. Agregarnlos nodos en el nodo Padre
        tienda.appendChild(titulo);
        tienda.appendChild(imagen);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(separador);

    }
)}

//title<h2> image<img> price<h3> description<p> 

