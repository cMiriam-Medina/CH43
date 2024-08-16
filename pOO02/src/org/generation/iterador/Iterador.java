package org.generation.iterador;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

public class Iterador {

	public static void main(String[] args) {
		//1. Iterar mediante ciclo forEach
		ArrayList<String> nombres = new ArrayList<String>(); 
		nombres.addAll(Arrays.asList("Mitzi", "Jorge", "Aparicio", "Ricardo", "Diego", "Oscar", "Salvador", "Emilio", "Felipe", "Cris", "Brandon", "Joel", "Miriam"));
		System.out.println(nombres);
		
		for (String nombre : nombres) {
			System.out.println(nombre);
		}
		
		// 2. Iterar mediante interfase Iterador
		System.out.println("-------Iterator-------");
		ArrayList<Double>salarios = new ArrayList<Double>();
		
		salarios.addAll(Arrays.asList(139984.32, 23432.32, 2434223.23, 23441123.12, 12321.31));
		System.out.println(salarios);
		
		// Mandamos a llamar la interfaz Iterator y la importamos. Posee la misma sintaxis de una Collection, pero no va a instancia un nuevo objeto de Iterator sino que aplicará un método de tipo iterator();
		Iterator<Double> iteradorSalarios = salarios.iterator();
		System.out.println(iteradorSalarios);
		
		//Necesitamos aplicar otros metodos de Iterator (.hasNext() y .next()) en un ciclo while para determinar si existen elementos en el ArrayList (boolean) y mostrar dichos elementos
		while (iteradorSalarios.hasNext()) {
			double salario = iteradorSalarios.next();
			System.out.println(salario);
		}
		
		//3. Iterar mediante expresiones Lambda y metodo .forEach
		System.out.println("----------Lambda----------");
		ArrayList<Integer> edades = new ArrayList<Integer>();
		edades.addAll(Arrays.asList(22, 32, 54, 12, 34, 54, 42, 32, 12, 13, 34, 53));
		
		// Iterando sobre el ArrayList usando el metodo forEach y una expresion lambda como parametro, donde cada elemento se llama edad.
		edades.forEach((edad) -> {
			System.out.println(edad);
		});
		
	}

	
	
	
	
	
	
	
	
	
	
}
