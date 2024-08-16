package org.generation.banco;

import org.generation.exceptions.FondosInsuficientesException;

public class ClientesAntiguos {

	public static void main(String[] args) {
		CuentaBancaria cuentaCintia = new CuentaBancaria(846274719911991L, "Cintia Odeth", 10000d);
		
		cuentaCintia.consultar();
		cuentaCintia.depositar(12833.12d);
		cuentaCintia.consultar();
		
		
		
		//Retirar dinero, necesito manejar mi metodo con la exception try-catch
		try {
			//Metodo de retiro
			cuentaCintia.retirar(4000);
		} catch (FondosInsuficientesException e) { //e de exception pero puede ser explicito o la abreviatura que uno quiera
			System.out.println("Saldo insuficiente");
		}
		cuentaCintia.consultar();
	}

}
