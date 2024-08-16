package org.generation.employee;

public class EmployeeMain {
	public static void main(String[] args) {
		//Instanciar nuevos objetos a partir de la clase Employee
		Employee daniel = new Employee("Daniel", "Maldonado", 37, 95363.27f, "Instructor");
		Employee salvador = new Employee("Salvador", "Gonzalez", 29, 19000.87f, "Fullstack Dev");
		Employee moni = new Employee("Monica", "Jasso", 27, 22000.17f, "Frontend Dev");
		Employee mitzi = new Employee("Mitzi", "Martinez", 26, 35000.34f, "MES Dev");
		Employee erick = new Employee("Erick", "Montes", 26, 9688.99f, "Fullstack Dev");
		
		
			
		System.out.println(daniel);
		System.out.println(salvador);
		System.out.println(moni);
		System.out.println(mitzi);
		System.out.println(erick);
		
		
		// Invocando los metodos de comportamiento del objeto
		erick.trabajar();
		moni.informacion();
		mitzi.calcularSalario();
		
		//Acceder a la informacion de los objetos (getters)
		System.out.println(salvador.getNombre() + " " + salvador.getApellido() + " trabaja como " + 					salvador.getPuesto());
		
		System.out.println(erick.getNombre() + " " + erick.getApellido() + " tiene un salario base de $" + 					erick.getSalario() + " pero se le incrementan $2000, quedando su nuevo salario en $" + 					(erick.getSalario() + 2000));
		System.out.println(erick); //Se sigue observando el mismo salario base porque no lo guardamos como parte de su atributo de objeto

		//Modificar informacion de los objetos (setter)
		float nuevoSalario = erick.getSalario() + 2000;
		erick.setSalario(nuevoSalario); //Guardo el nuevo salario como parametro del setter
		
		System.out.println(erick);	
		
		
		
	}
}
