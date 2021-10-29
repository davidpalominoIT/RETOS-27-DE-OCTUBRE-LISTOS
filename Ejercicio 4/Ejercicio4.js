
/*
4. Escriba un programa JavaScript para obtener el volumen de un cilindro con cuatro lugares
decimales usando clases de objetos
Volumen de un cilindro: V = πr 2 h

EJEMPLO: V= V = 3,14 x 10 x 3²=3,14 x 10 x 9 = 282,6 cm³

donde r es el radio y h es la altura del cilindro.*/


//document.write("Primera clase es ");

// Nota: Math es un objeto incorporado que tiene propiedades 
//y métodos para constantes y funciones matemáticas:

//parseInt() es una función de alto nivel que sirve para parsear una cadena 
//e intentar obtener un valor numérico a partir de esta. 

var altura = parseInt(prompt("Ingresa la primera altura del cilindro"));
var radio = parseInt(prompt("Ingresa el primer radio del cilindro"));
var vol = Math.PI * Math.sqrt(radio) * altura;
//vol = vol.toFixed(1);
//document.write(vol);

console.log(vol);

//document.write("Segunda clase es ");

var altura = parseInt(prompt("Ingresa la segunda altura del cilindro"));
var radio = parseInt(prompt("Ingresa el segundo radio del cilindro"));
var vol2 = Math.PI * Math.sqrt(radio) * altura;
//vol2 = vol2.toFixed(1);
//document.write(vol2);

console.log(vol2);


//document.write("Tercera clase es ");
var altura = parseInt(prompt("Ingresa la tercera altura del cilindro"));
var radio = parseInt(prompt("Ingresa el tercer radio del cilindro"));
var vol3 = Math.PI * Math.sqrt(radio) * altura;
console.log(vol3);


//document.write("Cuarta clase es ");
var altura = parseInt(prompt("Ingresa la cuarta altura del cilindro"));
var radio = parseInt(prompt("Ingresa el cuarto radio del cilindro"));
var vol4 = Math.PI * Math.sqrt(radio) * altura;
console.log(vol4);





/* PRUEBA
function bulk (r, h) // Establecer dos parámetros para el diámetro y la altura del cilindro
{
     document.write ("El volumen del cilindro es:" + Math.ceil (Math.PI * (Math.pow ((r / 2), 2)) * h));
     // Usa Math.ceil para redondear Math.pow para el cuadrado
}
 bulk (6,7); // Ingrese el diámetro y la altura del cilindro*/

