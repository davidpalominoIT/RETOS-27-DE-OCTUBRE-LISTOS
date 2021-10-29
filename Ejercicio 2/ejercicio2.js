/*2. Escriba un programa JavaScript para ordenar los elementos de una matriz:


Entrada: var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
Salida: -4, -3,1,2,3,5,6,7,8   */

let arreglo1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
const ordenarelementos =(arreglo)=>{
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
    for (let dos = 0; dos < length -1 -uno; dos++) { 
        if(arreglo[dos].charCode(0) > arreglo[dos + 1].charCode(0)){
            [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos +1], arreglo[dos]];
                }
    }
}
return arreglo
}
let arregloSort= arreglo1.sort(function(a,b){
    return a-b;
});
console.log(arregloSort);
