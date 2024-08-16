package org.generation.employee.developer;

public class DeveloperMain {
	
	public static void main(String[] args) {
	Developer alexis = new Developer("Alexis", "Garcia", 27, 12000f, "Frontend Dev", NivelDominio.JUNIOR, TipoLenguaje.CSS);
	Developer dani = new Developer("Daniela", "Luna", 25, 60000f, "Frontend Dev", NivelDominio.SENIOR, TipoLenguaje.JAVASCRIPT);
	Developer jorge = new Developer("Jorge", "Licea", 28, 35000f, "desarrollador backend", NivelDominio.MIDDLE, TipoLenguaje.JAVA);
	Developer mitzi = new Developer("Mitzi", "Martinez", 26, 45000f, "desarrolladora MES", NivelDominio.MIDDLE, TipoLenguaje.SQL);
	
	System.out.println(alexis);
	dani.calcularSalario();
	jorge.trabajar();
	mitzi.trabajar();
	
	
}
	
}
