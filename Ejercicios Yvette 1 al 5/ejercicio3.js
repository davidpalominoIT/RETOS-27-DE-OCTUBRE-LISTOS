
var estudiante = {

    nombre: "David Rayy",
    class: "VI",
    rollno: 12
};

console.log(estudiante);
console.log("contiene rollno: " + estudiante.rollno);


delete estudiante.rollno

console.log(estudiante);
console.log("ya no contiene ultima propiedad rollno: " + estudiante.rollno);