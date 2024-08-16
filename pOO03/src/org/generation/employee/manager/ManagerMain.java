package org.generation.employee.manager;

public class ManagerMain {
	public static void main(String[] args) {
Manager andrea = new Manager("Andrea","Rojas",28, 50000f,"Manager",9,2500f);
Manager alan = new Manager("Alan", "Pacheco",29,50000f,"Manager",9,2500f);
Manager roberto = new Manager("Roberto", "Venegas", 27, 35000, "Manager",9, 1200f);
Manager salvador = new Manager("Salvador", "González",29,40000f,"Manager",9,1500f);

System.out.println(alan);
System.out.println(andrea);
System.out.println(roberto);
System.out.println(salvador);

}
}