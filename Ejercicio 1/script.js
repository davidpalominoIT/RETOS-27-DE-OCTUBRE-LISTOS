/*
Ejercicios:
1. Escriba un programa JavaScript para mostrar el día y la hora actuales en el siguiente
formato:
Salida: Hoy es: Martes
Salida: La hora actual es: 10 PM:30:38
TIP: Investigar como obtener dia y hora actual en JavaScript*/

//NOTA: The getHours() method returns the hour for the specified date, 
//according to local time. --

//getMinutes() method returns the minutes in the specified date 
//according to local time.

//new Date()
//When called as a constructor, returns a new Date object.


document.write("Hoy es Miercoles: ");
var hora = new Date();
console.log(hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds());
document.write(hora);

/*
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
today = mm + '/' + dd + '/' + yyyy;
document.write(today); */
	
