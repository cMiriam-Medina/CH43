package org.generation.controlDeFLujo;

import java.util.Scanner;

//Metodo main
public class ControlFlujo {
	public static void main(String[] args) {
		/*
		 * Scanner. Metodo de java que me permite solicitar a un usuario cualquier tipo de dato.
		 * tenemos que importar la clase Scanner en nuestra clase e instanciar un nuevo objeto de Scanner.
		 * */ 
		
		 //1. Instanciar un objeto de tipo Scanner
		Scanner scanner = new Scanner(System.in);
		
		//2. Darle contexto al usuario
		System.out.println("Ingresa tu nombre");
		
		//3. Guardar el objeto Scanner instanciado en una variable, segun el tipo de datos que solicitamos
		//el metodo .next solo es para datos tipo string
		String nombre = scanner.next();
		
		//4. Imprimir el valor de la variable nombre
		System.out.println("Bienvenidx " + nombre);
		
		// -- Si quiero solicitar al usuario otra informacion, puedo reutilizar el objeto de tipo Scanner instanciado
		System.out.println("Ingresa tu edad: ");
		
		int edad = scanner.nextInt();
		
		System.out.println(nombre + " tu edad es de " + edad + " años");
		
		//Por buena practica debemos cerrar el scanner
		//De la linea de cerrado para atras, todo funciona. 
		//De la linea de cerrado en adelante ya no funciona el scanner
		scanner.close();
		
		/*
		 * Control de flujo
		 * 
		 * */
		
		// if, else if, else. Determinar si una persona es un bb, un nino, un adolescente o un adulto
		if (edad >= 18) {
			System.out.println("Es un adulto");
		} else if (edad >= 12) {
			System.out.println("Es un adolescente");
		} else if (edad >= 3) {
			System.out.println("Es un ninx");
		} else {
			System.out.println("Es un bb");
		}
		
		// Switch dia de la semana
		// -- switch. Ingresa un número del 1 al 7 para conocer a qué día de la semana corresponde
		System.out.println("Ingresa un número del 1 al 7 para conocer a qué día de la semana corresponde");
		int numeroDia = scanner.nextInt();
		
		switch (numeroDia) {
		case 1:
			System.out.println("Lunes");
			break;
		case 2:
			System.out.println("Martes");
			break;
		case 3:
			System.out.println("Miércoles");
			break;
		case 4:
			System.out.println("Jueves");
			break;
		case 5:
			System.out.println("Viernes");
			break;
		case 6:
			System.out.println("Sábado");
			break;
		case 7:
			System.out.println("Domingo");
			break;
			default:
				System.out.println("Número invalido");
				break;
		}
		
		// Operador ternario. tenemos que establecer el tipo de dato de salida del codigo
				int hora = 16;
				String operadorTernario = (hora<20) ? "buen dia":"buenas noches";
				System.out.println(operadorTernario);
		
		
		
		
		
		
		
		

	}
	
}
