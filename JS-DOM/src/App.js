//Script para trabajar con el formulario y la card morada
// Crear informacion de un usuario para que viva en un objeto (clave:valor...key:value) y poder manipularlo en el DOM

const user = {
    username: 'miriammedd',
    age: 37,
    email: 'cmmd0910@gmail.com',
    films: ['interstellar', 'shrek', 'star wars', 'kill bill', 'crazy stupid love']
};

//Crear funcion que me permite agregar la informacion del objeto 'user' dentro del div 'profile', es decir, dentro del nodo padre
const crearUsuario = (user) => {
    document.getElementById('name').textContent = user.username;
    document.getElementById('age').textContent = user.age;
    document.getElementById('e-mail').textContent = user.email;
   // document.getElementById('films').textContent = user.films;

   //Para mostrar los films como elementos de una lista desordenada, debo manipularlos mediante el DOM y agregarlos como elementos de lista
   //Vamos a crear los elementos de la lista y meter cada uno de los elementos del array en la lista desordenada utilizando el metodo .forEach()
    const listFilms = document.getElementById('films');

    //Recorro los elementos del array que viven en la clave 'films' del objeto 'user'
    user.films.forEach(film => {
        //Crear elementos de lista que viven en una constante
        const itemList = document.createElement('li');
        itemList.textContent = film;
        //Agergar en un nodo padre cada elemento de la lista
        listFilms.appendChild(itemList);
    })

};
crearUsuario(user);
//tmb podemos hacerlo con function de la siguiente manera, la info no va a cambiar:
// function crearUsuario (user) {

// }

//Crear una funcion para enviar informacion desde los inputs a la tarjetita utilizando eventos de escucha (addEventListener), modificando la informacion existente

//1. Guardar en constantes los elementos que quiero manipular
const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const botonActualizar = document.getElementById('button--main');
const nuevoUsername = document.getElementById('name') ;
const nuevoEmail = document.getElementById('e-mail');

//2. Crear la funcion con el evento para actualizar la informacion
botonActualizar.addEventListener('click', () => {
    nuevoUsername.textContent = inputUsername.value;
    nuevoEmail.textContent = inputEmail.value;
})