# Proyecto: Divide y Vencerás
> Saul Omar Arguello Hernandez
## Descripción
El paradigma **Divide and Conquer** es una poderosa técnica para resolver problemas complejos al dividirlos en partes más pequeñas y resolverlas recursivamente. Este enfoque permite diseñar algoritmos eficientes, simplificando problemas grandes y haciéndolos más manejables. En este proyecto, se implementará el método Divide and Conquer para encontrar el **número máximo en un arreglo de números**.

## Objetivo
El objetivo es que el alumno practique cómo dividir un problema en partes más pequeñas utilizando recursión y detener la recursión en un caso base. Esto desarrollará habilidades clave en el diseño de algoritmos utilizando el enfoque Divide and Conquer.

## Problema: Búsqueda del Máximo en un Arreglo
El desafío consiste en implementar una función que utilice Divide and Conquer para encontrar el número máximo en un arreglo. Para lograrlo:
1. Dividir el arreglo en dos mitades.
2. Resolver recursivamente para encontrar el máximo en cada mitad.
3. Combinar las soluciones comparando los máximos de ambas mitades.
4. Retornar el número máximo encontrado.

## Instrucciones
1. Divide el arreglo de números en dos mitades.
2. Utiliza recursión para encontrar el máximo de cada mitad.
3. Compara los máximos de las dos mitades y retorna el mayor.
4. Implementa un caso base para detener la recursión cuando el arreglo tenga un solo elemento.

### Pistas
- Utiliza el método `.pop()` para obtener y trabajar con el último elemento del arreglo.
- Usa un arreglo auxiliar para almacenar elementos mayores o iguales al último elemento procesado.
- Asegúrate de detener la recursión en el caso base.

## Entregables
1. Crea un **nuevo repositorio** en tu equipo local para desarrollar la solución.
2. Realiza uno o más **commits** con los archivos de la solución al problema.
3. Si lo deseas, agrega otros archivos con ejemplos adicionales o intentos previos.
4. Comparte el enlace de tu repositorio en GitHub con la solución.

## Funcionalidades
La función implementada incluye las siguientes características:
1. **División del problema**: Utiliza el enfoque Divide and Conquer para dividir el problema en partes más pequeñas.
2. **Recursión eficiente**: Utiliza recursión para encontrar el máximo en cada parte del arreglo.
3. **Caso base**: Detiene la recursión cuando el arreglo tiene solo un número.
4. **Comparación de máximos**: Compara los números mayores de cada parte para retornar el número más grande.
5. **Pruebas y validación**: Permite validar el resultado utilizando arreglos dinámicos y pruebas de rendimiento.

### Ejemplo de Código
```javascript
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
        if (numero >= referencia)
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
console.log(Math.max(...numbers)); // Comprobación

console.log(cont); // Muestra cuantas veces se realizó una recursión.
```