function findSmallest(arr: number[]) {
    let smallest = arr[0];
    let smallestIndex = 0;

    arr.forEach((el, i) => {
        if (el < smallest) {
            smallest = el
            smallestIndex = i
        }
    })

    return smallestIndex;
}

function selectionSort(arr: number[]) {
    let copiedArr = arr;
    const sortedArr: number[] = []

    copiedArr.forEach(() => {
        const smallest = findSmallest(copiedArr)
        sortedArr.push(copiedArr[smallest])
        copiedArr = copiedArr.filter((_, i) => i !== smallest)
    });

    return sortedArr
}

console.log(selectionSort([5, 3, 6, 2, 10]))