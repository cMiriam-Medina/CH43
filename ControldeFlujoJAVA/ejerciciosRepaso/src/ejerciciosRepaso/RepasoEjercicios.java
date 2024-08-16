package ejerciciosRepaso;

import java.util.Scanner;

public class RepasoEjercicios {
	public static void main (String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int edad1;
        float primaMensual = 0f;  
        float primaReal;
        int ingresoMensual;
        float bonificacion;
        float porcentaje;
        
        System.out.println("Ingresa tu edad:");
        edad1 = scanner.nextInt();
        
        System.out.println("Ingresa tu ingreso mensual:");
        ingresoMensual = scanner.nextInt();
        
       
        if (edad1 >= 70) {
            primaMensual = 500;
        } else if (edad1 >= 50 && edad1 <= 69) {
            primaMensual = 400;
        } else if (edad1 >= 30 && edad1 <= 49) {
            primaMensual = 200;
        } else if (edad1 >= 0 && edad1 <= 29) {
            primaMensual = 100;
        }
        
       
        if (ingresoMensual >= 300) {
            porcentaje = 0.1f;  
        } else if (ingresoMensual < 300) {
            porcentaje = 0.05f; 
        } else {
            porcentaje = 0.0f;  
        }
        
      
        bonificacion = primaMensual * porcentaje;
        
   
        primaReal = primaMensual + bonificacion;
        
        // Mostrar los resultados
        System.out.println("Tu prima mensual es de $" + primaMensual);
        System.out.println("Tienes un aumento del " + (porcentaje * 100) + "%!!!");
        System.out.println("Tu prima real es de $" + primaReal);
	
		
		scanner.close();
		
		
		
		
	}
}
