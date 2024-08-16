package org.generation.banco;

import org.generation.exceptions.FondosInsuficientesException;

public class Cajero {
	public static void main(String[] args) {
		//
		CuentaBancaria cuentaDaniel = new CuentaBancaria(234331466643335455L, "Daniel Maldonado");
		
		System.out.println(cuentaDaniel);
		
		//Depositar dinero
		cuentaDaniel.depositar(500);
		
		//Consultar saldo
		cuentaDaniel.consultar();
		
		//Depositar mas dinero
		cuentaDaniel.depositar(2500);
		
		//Consultar nuevamente saldo
		cuentaDaniel.consultar();
		
		//Retirar dinero, necesito manejar mi metodo con la exception try-catch
		try {
			//Metodo de retiro
			cuentaDaniel.retirar(4000);
		} catch (FondosInsuficientesException e) { //e de exception pero puede ser explicito o la abreviatura que uno quiera
			System.out.println("Saldo insuficiente");
		}
		cuentaDaniel.consultar();
	}

}
