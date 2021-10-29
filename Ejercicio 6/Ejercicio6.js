/*
6. Escriba una función de JavaScript para generar un número entero aleatorio

/*Usando el método Math.floor() podemos obtener nuestros números enteros 
generados aleatoriamente,*/
/*
La función Math.random() devuelve un número pseudoaleatorio de punto flotante 
en el rango de 0 a menos de 1 (incluido 0, pero no 1) con una distribución 
aproximadamente uniforme en ese rango, que luego puede escalar a su deseado distancia.
La implementación selecciona la semilla inicial para el algoritmo de generación de 
números aleatorios; el usuario no puede elegirlo ni restablecerlo.*/

function numeroaleatorio(max){
    return Math.floor(Math.random() * max);
}

console.log("Primer Número aleatorio: " + numeroaleatorio(1000));


/* Otra forma de obtener un número entero aleatorio
a=1;
b=1000;
n = (a+Math.floor(Math.random()*b));
document.write(n);*/