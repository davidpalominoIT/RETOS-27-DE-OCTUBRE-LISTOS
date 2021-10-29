
var letras="Adivina adivinador";

function tiene_minusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return "si";
        ;
      }
   }
   return "no";
}

console.log(tiene_minusculas(letras ));
document.write(tiene_minusculas(letras));

