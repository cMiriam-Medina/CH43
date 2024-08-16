package org.generation.employee;

//Esta clase es la plantilla de mi bjeto, que recibe atributos (variables de instancia) y comportamientos (metodos del objeto). Tambien recibe metodos constructores, metodos de accesibilidad (gatters y setters) y metodos de conversion (toString).
public class Employee {
	// 1. Declarar atributos (variables de instancia)
	String nombre;
	String apellido;
	int edad;
	float salario;
	String puesto;

	// 2. Metodo constructor. Recibe el mismo nombre de la clase, no retorna algo, recibe argumentos o parametros a los atributos del objeto (o no?) y estos se guardan con la palabra reservada this.
	
		//	public Employee(String nombre, String apellido, int edad, float salario, String puesto) {
		//		this.nombre = nombre;
		//		this.apellido = apellido;
		//		this.edad = edad;
		//		this.salario = salario;
		//		this.puesto = puesto;	
		//	}
	// ***Atajo para crear el metodo constructor: click derecho > Source > Generate Constructor using Fields > Generate  
	public Employee(String nombre, String apellido, int edad, float salario, String puesto) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.salario = salario;
		this.puesto = puesto;
	}
	
	// 3. Metodos de comportamiento
	public void trabajar() { //void no me regresa algo mas
		System.out.println("Estoy trabajando");
	}
	
	public void calcularSalario() {
		System.out.println("El salario es de $" + this.salario); //this me permite acceder al constructor sin acceder a la clase
	}
	
	public void informacion() {
		System.out.println("Nombre: " + this.nombre + ", Apellido: " + this.apellido + ", Edad: " + this.edad + ", Puesto: " + this.puesto);
	}

	// 4. Metodos de accesibilidad a la informacion de los atributos del objeto (getters y setters)
	//esto se hace para cada variable de instancia:
//	public String getNombre() {
//		return nombre;
//	}
	
//	public void setNombre(String nombre) {
//		this.nombre = nombre;
//	}
	
	//Atajo para geters y setters: click derecho > SOurce > Generate Getters and Setters >
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public float getSalario() {
		return salario;
	}

	public void setSalario(float salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	// 5. Metodo de conversion a String (toString). Permite convertir la informacion de los objetos en String. Incluye la anotacion @Override
	// Atajo para crear metodo toString: click derecho > Source > Generate toString()...
	@Override
	public String toString() {
		return "Employee [nombre=" + nombre + ", apellido=" + apellido + ", edad=" + edad + ", salario=" 				+ salario          + ", puesto=" + puesto + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
