function binarySearch(arr: number[], item: number): number | null {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        if (guess === item) return mid;

        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null
}

const arr = [0, 1, 4, 7, 19, 25, 40, 59, 60]
console.log(binarySearch(arr, 1))
console.log(binarySearch(arr, 7))
console.log(binarySearch(arr, 19))
