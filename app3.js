var fs = require('fs'); // File Stream

var manejador = function(err, data)
				{
					if(!err)
						console.log(data);
					else
					{
						console.log("ERROR: No se pudo abrir el archivo");
					}
				};
				
console.log("Primera ejecución: ");
fs.readFile('\documento2.txt', 'utf8', manejador);

console.log("Segunda ejecución: ");
fs.readFile('\documento.txt', 'utf8', manejador);

console.log("Tercera ejecución: ");

console.log("  Abriendo archivo ");
var content = fs.readFileSync('\documento.txt','utf8');

console.log("  Contenido del archivo ");
console.log(content);

console.log("Terminando tarea....");