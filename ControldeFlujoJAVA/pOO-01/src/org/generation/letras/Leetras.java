package org.generation.letras;
import java.util.Scanner;
public class Leetras {
	//Definir Scanner para recibir informacion del usuario
	Scanner scanner = new Scanner(System.in);
	
	//Metodo para retornar el Scanner y utilizarlo las veces que quiera
		public String leerEntrada() {
			return scanner.nextLine();
		}
		
		// Metodo para dar contexto al usuario
		public void contexto(String mensaje) {
			System.out.println(mensaje);
		}
}
