package generation.datosyvariables;

public class DataAndVariables {

	public static void main(String[] args) {
		System.out.println("Hola mundo");
	

/*Tipos de datos
	 * Numeros enteros
	 * byte
	 * short
	 * int
	 * long
	 * numeros decimales
	 * float
	 * double
	 * caracteres
	 * char
	 * boolean
	 * cadena de texto
	 * string */


	/*Operdores aritemeticos
	 * + suma
	 * - resta
	 * * multiplicacion
	 / division
	  * % residuo*/

	/*Operadores de comparacion
	 * == compara si un operando es igual a otro
	 * != compara si es diferente
	 * < menor que
	 * > mayor que
	 * <= menor o igual que
	 * >= mayor o igual que*/
/* Operadores lógicos
* && and
* || or
* ! not*/

byte numeroDeSalas = 8;
short asientosPorSala = 128;
int entradasVendidas = 75;
int totalAsientos = numeroDeSalas * asientosPorSala;
long ingresosTotales = 350001;
float precioEntrada = 99.99f;
double precioCombo = 249.00;
char letraAsiento = 'C';
boolean estaAbierto = true;
String nombreCine = "Blockbuster";

System.out.println("Cine: " + nombreCine);
System.out.println("Salas: " + numeroDeSalas);
System.out.println("Entradas vendidas: " + entradasVendidas);
System.out.println("Total de asientos: " + asientosPorSala);
System.out.println("Ingresos totales: " + ingresosTotales);
System.out.println("Precio de la entrada: " + precioEntrada);
System.out.println("Precio del combo: " + precioCombo);

System.out.println("Asientos: " + letraAsiento);

System.out.println("Esta abierto? " + estaAbierto);

//Operadores aritmeticos

double totalEntradas = asientosPorSala - entradasVendidas;

System.out.println("Entradas restantes: " + totalEntradas);


//Casteo conversion de datos que no utiliza metodos

//Casteo a entero

int precioEntradaEntero = (int) precioEntrada;
int precioComboEntero = (int) precioCombo;

System.out.println("Precio del boleto " + precioEntradaEntero);
System.out.println("Precio del combo " + precioCombo);

//Entero a long

long entradasVendidasLong = (long) entradasVendidas;

System.out.println("Total de boletos " + entradasVendidasLong);

//Entero a string
String entradasVendidasString = Integer.toString(entradasVendidas);
System.out.println("Boletos vendidos: " + entradasVendidasString);

//String a un entero
String entradasString = "75";
int boletosVendidos = Integer.parseInt(entradasString);
System.out.println("Venta de boletos: " + boletosVendidos);

//String a double
String comboString = "157.50";
double nuevoPrecio = Double.parseDouble(comboString);
System.out.println("Otro precio " + nuevoPrecio);


/*1. Calcular los ingresos por entradas.
2. Calcular los ingresos por ventas de palomitas.
3. Calcular los ingresos por ventas de bebidas.
4. Calcular el total de ingresos combinando entradas, palomitas y bebidas.
5. Mostrar los ingresos totales.

Determinar si los clientes pueden obtener un descuento basado en su edad o condición de estudiante.

- Determinar si el cliente tiene menos de 12 años, más de 65 años, o es estudiante.
20% de descuento en la entrada*/

//1. Calcular los ingresos por entradas.
float gananciasDia = precioEntrada * entradasVendidas;
System.out.println("Hasta el momento se han recibido " + gananciasDia);
// 2. Calcular los ingresos por ventas de palomitas
double gananciasDulceria = precioCombo * entradasVendidas;
System.out.println("Hasta el momento se han ganado " + gananciasDulceria + " pesos por la venta de palomitas");
// 3. Calcular los ingresos por ventas de bebidas.
double precioBebidas = 46.8;
double gananciasBebidas = precioBebidas * entradasVendidas;
System.out.println(gananciasBebidas);
// 4. Calcular el total de ingresos combinando entradas, palomitas y bebidas
double ingresosTotalesDia = gananciasDia + gananciasDulceria + gananciasBebidas;
System.out.println(ingresosTotalesDia);
// 5. Mostrar los ingresos totales

// 6. Determinar si los clientes pueden obtener un descuento basado en su edad o condición de estudiante.
//    - Determinar si el cliente tiene menos de 12 años, más de 65 años, o es estudiante.
//      20% de descuento en la entrada

int edadCliente = 18;
String profesionCliente = "Estudiante";

if(edadCliente<=12 || profesionCliente == "Estudiante" || edadCliente>=65 ){
	 float descuento = 0.2f;
	 double nuevoPrecio = descuento * precioEntrada;
	 System.out.println("El precio de su entrada con descuento es de " + nuevoPrecio + " pesos");
}else {
	 System.out.println("El precio de la entrada es " + precioEntrada + " pesos");
         }











	}

	}