package org.generation.employee;

public class Employee {
	private String nombre;
	private String apellido;
	private int edad;
	private float salario;
	private String puesto;
	
	public Employee(String nombre, String apellido, int edad, float salario, String puesto) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.salario = salario;
		this.puesto = puesto;
	}
	
	public void trabajar() { //void no me regresa algo mas
		System.out.println("Estoy trabajando");
	}
	
	public void calcularSalario() {
		System.out.println("El salario es de $" + this.salario); //this me permite acceder al constructor sin acceder a la clase
	}
	
	public void informacion() {
		System.out.println("Nombre: " + this.nombre + ", Apellido: " + this.apellido + ", Edad: " + this.edad + ", Puesto: " + this.puesto);
	}
	
}
