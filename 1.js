function findMinNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

const array1 = [напишіть декілька чисел сюди через кому];
console.log("Мінімальне число в масиві:", findMinNumber(array1));