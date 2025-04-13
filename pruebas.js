function mergeSort(arr) {
    // Caso base
    if (arr.length <= 1) return arr; 
    // Dividir
    const left = [];
    const right = [];
    const referencia = arr.pop();
    arr.forEach(element => element <= referencia? left.push(element):right.push(element));
    //Combinar
    return [...mergeSort(left),referencia,...mergeSort(right)];
}

const array = [5, 2, 9, 1, 5, 6];

console.log(mergeSort(array)); // Salida: [1, 2, 5, 5, 6, 9]