/**
 * Factorial
 * @param value
 */
const fact = (value: number): number =>
    value === 1
        ? 1
        : value * fact(value - 1)

console.log('Factorial', fact(2))
console.log('Factorial', fact(3))
console.log('Factorial', fact(4))


/**
 * Sum of array's elements
 * @param arr
 */
const sum = (arr: number[]): number => {
    if (arr.length === 0) {
        return 0
    } else {
        let first = arr[0]
        arr.splice(0, 1)

        return first + sum(arr)
    }
}

console.log('Sum of array', sum([0, 1, 2, 3]))
console.log('Sum of array', sum([2, 33]))

/**
 * Sum of List's elements
 */
class ListNode {
    private next: ListNode | null
    private val: number

    constructor(val: number, next: ListNode | null = null) {
        this.next = next
        this.val = val
    }

    setVal(val: number): this {
        this.val = val

        return this
    }

    getVal(): number {
        return this.val
    }

    setNext(next: ListNode | null): this {
        this.next = next

        return this
    }

    getNext(): ListNode | null {
        return this.next
    }
}

let firstNode = new ListNode(3)
let secondNode = new ListNode(5)
firstNode.setNext(secondNode)
let thirdNode = new ListNode(9)
secondNode.setNext(thirdNode)

function sumOfList(firstNode: ListNode | null): number {
    return firstNode === null
        ? 0
        : firstNode.getVal() + sumOfList(firstNode.getNext())
}

console.log('Sum of list`s elements', sumOfList(firstNode))

/**
 * Count of list's elements
 * @param firstNode
 */
function countOfList(firstNode: ListNode | null): number {
    return firstNode === null
        ? 0
        : 1 + countOfList(firstNode.getNext())
}

console.log('Count of list`s elements', countOfList(firstNode))

/**
 * Max element in a list
 * @param firstNode
 * @param max
 */
function getMax(firstNode: ListNode | null, max: number = 0): number {
    if (firstNode === null) {
        return max;
    }

    if (firstNode.getVal() > max) {
        max = firstNode.getVal()
    }

    return getMax(firstNode.getNext(), max)
}

console.log('Max element in a list', getMax(firstNode))
