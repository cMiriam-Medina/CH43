package org.generation.banco;

import org.generation.exceptions.FondosInsuficientesException;

// Aqui vive mi objeto con atributos y metodos
public class CuentaBancaria {
	//1. Atributos
	private Long idCuenta;
	private String propietario;
	private double saldo;
	
	
	//2. Metodo constructor que solo recibe idCuenta y propietario como parametros, ya que el saldo inicial de los nuevos clientes es de $0
	public CuentaBancaria(Long idCuenta, String propietario) {
		this.idCuenta = idCuenta;
		this.propietario = propietario;
	}
	
	//--Metodo constructor para clientes que ya tienen un saldo previo en su cuenta bancaria (sobrecarga de metodos: overloading)
	public CuentaBancaria(Long idCuenta, String propietario, double saldo) {
		this.idCuenta = idCuenta;
		this.propietario = propietario;
		this.saldo = saldo;
	}
	
	// 3. Metodos especificos para la clase: ingresar dinero, consultar saldo, retirar dinero
	
	// -- Ingresar dinero
	public void depositar(double monto) {
		saldo += monto; //Tambien podemos usarlo como saldo = saldo + monto;
	}
	
	// -- Consultar saldo
	
	public void consultar() {
		System.out.println("Tu saldo es de $" + saldo);
	}
	
	// -- Retirar dineros (implementar FondosInsuficientesException como excepcion)
	// Le digo al metodo que implemente la excepcio utilizando la palabra reservada throws
	public void retirar(double monto) throws FondosInsuficientesException {
		if (monto <= saldo) {
			saldo -= monto;
		} else {
			//exception
			throw new FondosInsuficientesException(saldo);
		}
	}

	public Long getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(Long idCuenta) {
		this.idCuenta = idCuenta;
	}

	public String getPropietario() {
		return propietario;
	}

	public void setPropietario(String propietario) {
		this.propietario = propietario;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	// toString
		@Override
		public String toString() {
			return "CuentaBancaria = idCuenta: " + idCuenta + ", propietario: " + propietario + ", saldo: " + saldo;
		}
}
