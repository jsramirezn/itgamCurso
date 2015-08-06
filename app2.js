var funcionSaludar = function(nombre)
					 {
						console.log( "Hola " + nombre );
					 } 
					 
var funcionDespedida = function(nombre)
					   {
						  console.log( "Adios " + nombre );
					   }
					   
function mensaje(nombre, handler)
{
	handler(nombre);
}

mensaje("Jesús", funcionSaludar);
mensaje("Jesús", funcionDespedida);