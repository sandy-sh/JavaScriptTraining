/*
User Stories:

1. You should have a sumFibs function that accepts a number as an argument.
2. The sumFibs function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
3. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
4. Only the odd Fibonacci numbers should be added to the sum.
*/

function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let sum = 0;

    while (curr <= num) {
        if (curr % 2 !== 0) {
            sum += curr;
        }

    const next = prev + curr;
    prev = curr;
    curr = next;
    }

    return sum;
}

console.log(sumFibs(1000));