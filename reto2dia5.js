//reto 2 

//funcion clasica
function calculadora(operacion, op1, op2=0, op3 = 0) {
    if (operacion == 'sum'){
        return op1 + op2 + op3
    }
    if (operacion == 'subs') {
        return op1 - op2 -op3
    }
    if ( operacion == 'mult'){
        return op1 * op2 * op3
    }
    if (operacion == 'div') {
        return op1 / op2 / op3
    }
}

console.log(calculadora('sum', 23));
console.log(calculadora('subs', 6, 88));
console.log(calculadora('mult', 3, 40));
console.log(calculadora('div', 5));

//funcion arrow
let calculadoraArrow = (operacion, op1, op2 = 0, op3 = 0) => 
{if (operacion == 'sum'){
    return op1 + op2 + op3
} 
if (operacion == 'subs') {
    return op1 - op2 - op3
}
if ( operacion == 'mult'){
    return op1 * op2 * op3
}
if (operacion == 'div') {
    return op1 / op2 / op3
}
}

console.log(calculadoraArrow('sum', 23));
console.log(calculadoraArrow('subs', 90, 88));
console.log(calculadoraArrow('mult', 9, 40));
console.log(calculadoraArrow('div', 5));

//spread operator
let paramsSum = ['sum', 23];
let paramsSubs = ['subs', 90, 88];
let paramsMult = ['mult', 9, 40];
let paramsDiv = ['div', 5];

console.log(calculadora(...paramsSum));
console.log(calculadora(...paramsSubs));
console.log(calculadora(...paramsMult));
console.log(calculadora(...paramsDiv));

//Añade a este archivo de funciones, una nueva función que haga el cuadrado de un número.
function cuadradonum(num) {
    let resultado = num * num;
    return resultado;
}
let num = 8;
let alcuadrado = cuadradonum(num);
console.log(alcuadrado);