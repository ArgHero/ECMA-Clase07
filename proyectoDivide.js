let cont = 0;
function findMax(numeros) {
    cont++;
    // Caso base: Si el arreglo tiene un solo número, es el máximo
    if (numeros.length === 1)
        return numeros.at(0);
    // Dividir
    const referencia = numeros.pop();
    const mayor = [referencia];
    numeros.forEach(numero => {
        if (numero>= referencia)
            mayor.push(numero);
    });

    if (mayor.every(num => num === referencia))
        return referencia; // Devuelve el número más grande cuando todos los elementos son iguales

    return findMax(mayor);
}

const numbers = [
    765, 342, 29, 917, 514, 102, 865, 459, 198, 303,
    791, 61, 475, 687, 852, 520, 436, 149, 972, 638,
    234, 795, 501, 105, 840, 325, 893, 712, 657, 47,
    199, 482, 356, 985, 671, 818, 433, 122, 573, 629,
    710, 807, 383, 263, 589, 412, 915, 135, 721, 468
  ];

console.log(findMax(numbers)); // Salida: 985
console.log(Math.max(...numbers));// Comprobación

console.log(cont);// Muestra cuantas veces se realizó una recursión.