/******* POO ********
 * Clase: Se refiere a nuestro molde o plantilla para que podamos crear objetos
 * Constructor: Es una caracteristica especifica de las clases que nos ayuda a construir al objeto
 * Objeto: Es lo que construimos a traevs de la clase y el constructor pero con atributos especificos
 * 
 * Abstraccion: Se refiere a reducir al objeto lo mas posible
 * Herencia: Cuenta con la palabra reservada extends y con ella podemos heredar atributos de una clase a otra
 * Encapsulamiento: Consiste en como voy a manejar los datos y hasta donde van a tener acceso mis usuarixs
 * Polimorfismo: Consiste en ver como se comporta un objeto de forma distinta ante un mismo metodo de acuerdo a sus propiedades
 * 
 * *****Principios Solid: ******
 * Pincipio de Responsabilidad Unica (SRP): Se refiere a que cada que asignamos una clase, objeto, ... debe ser unica
 * Principio de Abierto/Cerrado (OCP): Se refiere a que debemos poder extender el codigo ya existente de ser necesario
 * Principio de sustitucion de Liskov (LSP):  se refiere a que podemos tener cualquier tipo de dato dentro de mi objeto y al peretenecer a la misma clase no debe afectar el comportamiento de mi objeto 
Principios de Segregación de interfaces (ISP) : se refiere a que es mejor tener distintas interfaces especificas a una sola muy grande 
Principio de inversión de dependencias (DIP) : se refiere a que en lugar de que el código dependa de detalles especificos lo haga a tra ves de abstracciones 
*/

class ch43 {//Toda la cohorte 43 (Todxs sus integrantes)
    constructor(nombre, apellido, email, edad){//caracteristicas de la clase ch43
        this.name = nombre;
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y tengo ${this.age} anos!`
    }
    //con funciones flecha la palabra reservada this se comporta de manera diferente por lo que no se usan funciones flecha dentro de mis clases. Por el ecma script
    // const infoInte = () => {
    //     console.log(this.info);
    // }
    infoInte (){
        console.log(this.info);
    }
}

class participante extends ch43 {
    constructor(nombre, apellido, email, edad, telefono){
        //super hace referencia a una clase hija que queremos heredar
        super (nombre, apellido, email, edad);
        this.phone = telefono;

    }
    //Metodos estaticos, no necesita que la clase se defina para poder ser creado. No se va a ver afectado por las propiedades de mi constructor
    static canvas(){
        console.log('Ya estas registradx');
    }
}


class mentoria extends ch43 {
    constructor(nombre, apellido, email, edad, especialidad){
        super(nombre, apellido, edad, email);
        this.specialty = especialidad;

    }
    static mensaje(){
        alert("Hoy tienes sesion")
    }
}


class instruccion extends ch43 {
    constructor(nombre, apellido, edad, email, licenciatura){
        super(nombre, apellido, email, edad);
        this.degree = licenciatura;
    }
    
    static darSesiones (){
        console.log('Hoy no tienes sesion');
    }

    //Metodos getters y setters
    //set: podemos modificar
    //get: obtener o crear un valor

    set setDegree(newDegree) {
        this.degree = newDegree;
    }

    get getDegree(){
        return this.degree; 
    }
}

// fetch('./ejemplo.json')
//     .then(data => data.json())
//     .then(data => {
//         console.log(data) 
//     })

fetch('ejemplo.json')
.then(response => response.json())
.then(data => {
    data.forEach(participanteData => {
        const { nombre, apellido, email, edad, telefono} = participanteData;
        const nuevoParticipante = new participante(nombre, apellido, email, edad, telefono);
        nuevoParticipante.infoInte();
    })
})

const inte1 = new participante('Aparicio', 'Huerta', 'aparicio@gmail.com', 29, '5579003829');
const inte2 = new mentoria('Yareri', 'Arcos', 'yare@gmail.com', 29);
const inte3 = new instruccion('Daniel', 'Maldonado', 'dani@gmail.com', 35, 'Licenciatura');
const inte4 = new mentoria('Tadeo', 'Zepeda', 'tadeo@gmail.com', 26);
const inte5 = new participante('Adrian', 'Becerra', 'adrian@gmail.com', 24, '5598302848');
const inte6 = new participante('Alan', 'Pacheco', 'alan@gmail.com', 29, '5543218956');
const inte7 = new participante('Lizbeth', 'Zarazua', 'liz@gmail.com', 25, '5567382910');

//console.log(inte7.info);

inte5.infoInte();
inte1.infoInte();
inte3.infoInte();
inte4.infoInte();

participante.canvas();
instruccion.darSesiones();

inte3.setDegree = 'Maestria';
console.log(inte3.degree);

