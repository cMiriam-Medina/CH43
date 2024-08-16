package org.generation.employee.developer;

import org.generation.employee.Employee;

public class Developer extends Employee {
	// Atributos: nivel(junior, middle, senior), tupolenguaje(java, js, cobol, python, sql
	//Clases de tipo ENUM (de enumerar)
	private NivelDominio nivel;
	private TipoLenguaje tipoLenguaje;
	
	//Constructor con super atributos
	public Developer(String nombre, String apellido, int edad, float salario, String puesto, NivelDominio nivel, TipoLenguaje tipoLenguaje) {
		super(nombre, apellido, edad, salario, puesto);
		this.nivel = nivel;
		this.tipoLenguaje = tipoLenguaje;
	}
	
	// Métodos propios de Developer
		public void trabajar() {
			System.out.println("El " + this.getPuesto() + " " + this.nivel + " que trabaja con " + this.tipoLenguaje);
		}

		// Getters y Setters
		public NivelDominio getNivel() {
			return nivel;
		}

		public void setNivel(NivelDominio nivel) {
			this.nivel = nivel;
		}

		public LenguajesProgramacion getTipoLenguaje() {
			return tipoLenguaje;
		}

		public void setTipoLenguaje(LenguajesProgramacion tipoLenguaje) {
			this.tipoLenguaje = tipoLenguaje;
		}
	
		@Override
		public String toString() {
			return "Developer = Nombre: " + getNombre() + ", Apellido: " + getApellido() + ", Edad: " + getEdad() + ", Salario: $" + getSalario() + ", Puesto: " + getPuesto() + ", Nivel: " + nivel 	+ ", Tipo de Lenguaje: " + tipoLenguaje;
		}	
}
