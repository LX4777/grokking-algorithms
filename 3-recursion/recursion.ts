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
    next: ListNode | null
    val: number

    constructor(val: number, next: ListNode | null = null) {
        this.next = next
        this.val = val
    }

    set(val: number) {
        this.val = val
    }

    getVal(): number {
        return this.val
    }

    setNext(next: ListNode | null) {
        this.next = next
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
    if (firstNode === null) return 0

    return firstNode.getNext() === null
        ? firstNode.getVal()
        : firstNode.getVal() + sumOfList(firstNode.getNext())
}

console.log('Sum of list', sumOfList(firstNode))