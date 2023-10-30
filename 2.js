function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Знайдено елемент
        } else if (arr[mid] < target) {
            left = mid + 1; // Пошук праворуч
        } else {
            right = mid - 1; // Пошук ліворуч
        }
    }

    return -1; // Елемент не знайдено
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 5;
console.log(`Індекс елемента ${targetElement}:`, binarySearch(array2, targetElement));