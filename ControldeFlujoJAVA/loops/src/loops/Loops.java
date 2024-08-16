package loops;

import java.util.Scanner;

public class Loops {
	public static void main (String[] args) {
		
		// --- Loops, bucles, ciclos: for, while, do-while
		//1. Crear un programa que realice una cuenta de 1 a n, donde n es el numero que el usuario proporciona
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingresa un numero final: ");
		
		// Podemos inicializar multiples variables del mismo tipo en una sola linea
		int numInicial, numFinal;
		numInicial = 1;
		numFinal = scanner.nextInt();
		
		while (numInicial <= numFinal) {
			System.out.println(numInicial);
			numInicial++;
		}
		
		
		//2. Crear un programa que solicite al usuario un numero entre 1 y 999, para determinar cuantos digitos posee dicho numero. El programa se ejecuta sin terminar el proceso hasta que el usuario ingrese el numero 0
		
		int numero;
		
		// \n es un caracter de escape
		do {
			System.out.println("Ingresa un numero entre 1 y 999 para conocer cuantos digitos tiene. \nAl ingresar el 0 se termina el programa.");
		numero = scanner.nextInt();
		
		if (numero >= 100 && numero <= 999) {
			System.out.println("El numero " + numero + " posee 3 cifras");
		} else if (numero >= 10 && numero <= 99) {
			System.out.println("El numero " + numero + " posee 2 digitos");
		} else if ( numero <= 9 && numero >= 1) {
			System.out.println("El numero " + numero + " posee 1 digito");
		} else {
			System.out.println("Tu numero no entra en el rango");
		}
		
		} while (numero != 0);
		System.out.println("\u001B[33mEl programa ha finalizado\u001B[37m");
		//ANSI code 
		
		//3. Determinar un cliente ganador
		for (int contador = 1; contador <= 10; contador++) {
		    //Sentencia continue
		    if (contador == 5) {
		        System.out.println("Cliente ganador");
		        continue;
		    }
		    System.out.println("Cliente número " + contador );
		}
		
		//4. Crear un programa que nos permita calcular el area de un circulo, solicitando al usuario el valor del radio de la circunferencia
		System.out.println("Ingresa el radio del circulo para calcular su area");
		double radio = scanner.nextDouble();
		
		//pi * radio^2
		double area = Math.PI * Math.pow(radio, 2);
		System.out.println("El area del circulo es " + area);
		
		
		scanner.close();
	}
}
