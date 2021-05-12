'use strict'

const elementNumber=document.querySelector('.js-number');
const elementBtn=document.querySelector('.js-btn');
const elementTrack=document.querySelector('.js-track');
const elementAttempts=document.querySelector('.js-attempts');

/* Devuelve un número aleatorio entero entre 1 y max siendo max el valor máximo que le paso por parámetro a la función*/
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

/* Cuenta el número de veces que pulso el botón Prueba*/
function countClick(){
    contClick++;
    elementAttempts.value=`Número de intentos: ${contClick}`;
}

/* Comprueba si el valor introducido está dentro de rango y si son iguales/mayor/menor */
function checkValuenumber(number){
    if (number>100) {
        elementTrack.value=`El número debe estar entre 1 y 100`
    } else if (numberRandom==number){
            elementTrack.value=`Has ganado campeona!!`
        } else if (numberRandom<number){
            elementTrack.value=`Demasiado alto.`
        } else {
            elementTrack.value=`Demasiado bajo.`
        }
    }
/* Llama función contar clicks comprueba si hemos introducido un valor  y si es así llama función comprobar valor*/
function handlerChecknumber(){
    countClick();
    if (elementNumber.value==""){
        elementTrack.value=`El número debe estar entre 1 y 100`
    } else {
        checkValuenumber(parseInt(elementNumber.value));
    }

}

const numberRandom=getRandomNumber(100);
console.log(numberRandom);
let contClick=0;
elementBtn.addEventListener("click", handlerChecknumber);