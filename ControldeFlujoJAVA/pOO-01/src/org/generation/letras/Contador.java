package org.generation.letras;
	//Aqui vive la logica para contar las vocales, consonantesm numeros y simbolos
	//---- Grupo 1 -> Metodos booleanos para determinar si la entrada del usuario tiene o no, 					los tipos de caracteres
	// ---- Grupo 2 -> Metodos int para realizar el conteo de cada tipo de caracter
public class Contador {
	//---- Grupo 1
	
	// Vocales
	public boolean esVocal(char caracter) {
		return (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u' || caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U');
	}
	
	//Consonantes
	public boolean esConsonante(char caracter) {
		//Casteo para utilizar los valores de la tabla ASCII
		short codigoAscii = (short) caracter;
		//Si el caracter se encuentra entre 65 y 90 y 97 y 122, y es diferente de una vocal, entonces es una consonante
		return ((codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122) && !esVocal(caracter));
	}
	
	//Numeros
	public boolean esNumero(char caracter) {
		short codigoAscii = (short) caracter;
		return (codigoAscii >= 48 && codigoAscii <= 57);
	}
	
	//-Simbolos
	public boolean esSimbolo(char caracter) {
	return !(esVocal(caracter) || esConsonante(caracter) || esNumero(caracter));
	}
	
	
	//----Grupo 2
	
	// - Vocales
	public int contarVocales(String texto) {
		int vocales = 0;
		for (char caracter : texto.toCharArray()) {
			if (esVocal(caracter)) {
				vocales++;
			}
		}
		return vocales;
	}
	
	// - Consonantes
	public int contarConsonantes(String texto) {
		int consonantes = 0;
		for (char caracter : texto.toCharArray()) {
			if (esConsonante(caracter)) {
				consonantes++;
			}
		}
		return consonantes;
	}
	
	// - Numeros
	public int contarNumeros(String texto) {
		int numeros = 0;
		for (char caracter : texto.toCharArray()) {
			if (esNumero(caracter)) {
				numeros++;
			}
		}
		return numeros;
	}
	
	// - Simbolos
	public int contarSimbolos(String texto) {
		int simbolos = 0;
		for (char caracter : texto.toCharArray()) {
			if (esSimbolo(caracter)) {
				simbolos++;
			}
		}
		return simbolos;
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
