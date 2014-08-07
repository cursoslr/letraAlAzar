
//Mediante array, asignamos valores a las letras:
var opciones = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "\u00f1", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
			   //0,   1,   2.....

//Declaramos la función para obtener números aleatorios enteros:
function  aleatorio(minimo, maximo)
{
	var letra = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
	return letra;
}

//Instrucción: "Dame una letra del array al azar usando la función de aleatorio:
var letraAlAzar = aleatorio(0,26)

//Alerts:
alert( "Vas a obtener una letra aleatoria." );
alert( "Tu letra es:\n      " + opciones[letraAlAzar] );


//¡Ya está!
