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