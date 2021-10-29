// opcion 1

pi =3.1416
radio = prompt("Ingrese radio");
altura = prompt("Ingrese la altura");

radio = parseInt(radio);
altura = parseInt(altura);

respuesta = pi*Math.pow(radio,2)*altura;

console.log("El volumen del cilindro es:" + respuesta);



// opcion 2
document.write ("El volumen del cilindro es:" + Math.ceil (Math.PI * (Math.pow (4 , 2)) * 20));
