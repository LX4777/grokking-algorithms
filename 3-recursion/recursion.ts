const fact = (value: number): number =>
    value === 1
        ? 1
        : value * fact(value - 1)

console.log(fact(2))
console.log(fact(3))
console.log(fact(4))

/**********************************************/

const sum = (arr: number[]): number => {
    if (arr.length === 0) {
        return 0
    } else {
        let first = arr[0]
        arr.splice(0, 1)

        return first + sum(arr)
    }
}

console.log(sum([0, 1, 2, 3]))
console.log(sum([2, 33]))

/**********************************************/
