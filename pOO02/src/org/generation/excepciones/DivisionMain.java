package org.generation.excepciones;

// En esta clase escribire el metodo para realizar una division entre dons numeros y el metodo para instanciar objetos (main)
public class DivisionMain {
	//Metodo que nos permite dividir dos numeros
	public static double division(double num1, double num2) {
		return num1 / num2;
	}
	
	public static void main(String[] args) {
		System.out.println(division(50,10)); //Output: 5.0
		System.out.println(division(50,0)); // Output: Infinity
		System.out.println(division(0,50)); //Output: 0.0
		
		// --- Manejando Exceptions
		try {
			//int resultado = divisionEnteros(50, 0);
			double resultado = division(50, 0);
			System.out.println("El resultado de la division es: " + resultado);
		} catch (ArithmeticException e) {
			System.out.println("\u001B[31mNo se puede dividir entre cero\u001B[0m");
		} finally {
			System.out.println("\u001B[32mPrograma finalizado");
		}
		
	}

}
