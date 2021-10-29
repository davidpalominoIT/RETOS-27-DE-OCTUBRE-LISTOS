

var arr1 = [3,8,7,6,5,-4,3,2,1];


const orden = (arreglo) => {

    let lenght = arreglo.lenght;
    for(let uno = 0; uno < lenght; uno++){
    
        for (let dos = 0; dos<lenght -1 - uno; dos++){
    
            if(arreglo[dos] > arreglo[dos + 1]){
                [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos + 1], arreglo[dos]];
            }
        }
    }
    
    return arreglo
    
    }
    
    let arregloSort = arr1.sort(function(a,b){
        return b-a;
    });
    console.log(arregloSort);