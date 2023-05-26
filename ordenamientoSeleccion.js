/*
Algoritmo: Ordenamiento por selección
Nombre: Jaiber Duvan Diaz Leon
Fecha: Mayo 26/2023
*/


function mayorArray(array){

    if(array.length === 0){
        return null; 
    }else if(array.length === 1){
        return array[0];
    }else{

        let max = array[0];

        for(let i = 1; i < array.length; i++){
            if(array[i] > max){
                max = array[i];
            }
        }

        let index = 0;

        while(index < array.length){
            console.log(array[index]);
            index++;
        }

        let count = 0;
        let j = 0;

        do{
            if(array[j] % 2 !== 0){
                count++;
                console.log("Estos son impares",array[j]);
            }
            j++;
        }while(j < array.length)

        return max;
    }
}

var userInput = console.log("¿Cuántos números desea ordenar?");
var size = parseInt(userInput);
var numbers = [];

for (var i = 0; i < size; i++) {
  console.log("Número  " + (i + 1) + ":");
  var number = parseInt(userInput);
  
  numbers.push(number);
}

mayorArray(numbers);

