console.log("Instrucción ejecutada: ")
console.log(process.argv);

console.log("Saludos desde archivo app.js");
var parametro = process.argv[2];

// Verificando que haya elementos a sumar
if(!parametro)
{
	console.log("ERROR: No hay elementos para sumar...");
	// Termina la ejecución del programa
	process.exit();
}

var arr = parametro.toString().split(",");
var suma = 0; 

console.log( "Suma = " );
for( var i = 0; i < arr.length; i++)
{
	suma += parseInt(arr[i]);
	if( (i+1) == arr.length )
		console.log(arr[i] + " = ");
	else
		console.log(arr[i] + " + ");
}

console.log( suma );