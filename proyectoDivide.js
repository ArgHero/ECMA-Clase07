let cont = 0;
function findMax(numeros) {
    cont++;
    // Caso base: Si el arreglo tiene un solo número, es el máximo
    if (numeros.length === 1)
        return numeros.at(0);
    // Dividir
    const referencia = numeros.pop();
    const menor = [];
    const mayor = [];

    numeros.forEach(numero => numero < referencia ? menor.push(numero) : mayor.push(numero));
    mayor.unshift(referencia);

    if (mayor.every(num => num === referencia))
        return referencia; // Devuelve el número más grande cuando todos los elementos son iguales

    return findMax(mayor);
}

const numbers = [32, 2001, 3, 8, 2000, 10, 5, 7, 98, 2002, 2002,2003];
console.log(findMax(numbers)); // Salida: 2003
console.log(cont);// Muestra cuantas veces se realizó una recursión.