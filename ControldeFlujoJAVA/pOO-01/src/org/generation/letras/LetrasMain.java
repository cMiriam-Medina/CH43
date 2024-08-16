package org.generation.letras;

public class LetrasMain {

	public static void main(String[] args) {
		//Instanciar objetos de las clases (Letras y Contador)
		Letras letras = new Letras();
		Contador contador = new Contador();
		
		// Aplicar metodos a cada instancia para utilizarlos
		letras.contexto("Escribe un texto para conocer el numero de vocales, consonantes, 						numeros y simbolos que posee");
		
		String texto = letras.leerEntrada(); //Esto lo utilizare en los metodos de 			contabilizacion y seria mejor guardarlo en una variable
		
		contador.contarVocales(texto); //Esto lo utilizare para mostrarle al usuario cuantas 			vocales tiene su texto y seria mejor guardarlo en una variable
		System.out.println("Hay " + totalVocales + " vocales");
		
		int totalConsonantes = contador.contarConsonantes(texto);
		letras.contexto("Hay " + totalConsonantes + " consonantes"); //// Decidimos utilizar 			el método contexto que ya nos permite mostrar un mensaje desde el objeto letras
		
		int totalNumeros = contador.contarNumeros(texto);
		letras.contexto("Hay " + totalNumeros + " numeros");
		
		int totalSimbolos = contador.contarSimbolos(texto);
		letras.contexto("Hay " + totalSimbolos + " simbolos");
		
		
	}

}
