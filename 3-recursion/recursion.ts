const fact = (value: number): number =>
    value === 1
        ? 1
        : value * fact(value - 1)


console.log(fact(2))
console.log(fact(3))
console.log(fact(4))
