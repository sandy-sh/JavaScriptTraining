/*
User Stories:

1. You should have a sumPrimes function that accepts a number as an argument.
2. The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
3. If the input number is less than 2, the function should return 0.
*/

function sumPrimes(limit) {
    function isPrime(num) {
        if (num < 2) return 0;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }   
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(10)); // 17 (2 + 3 + 5 + 7)
console.log(sumPrimes(20)); // 77 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19)