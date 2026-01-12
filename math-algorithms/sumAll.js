/*
User Stories:

1. You should have a function named sumAll that accepts an array of two numbers.
2. sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. 
The lowest number will not always come first. For example, sumAll([4,1]) should return 10 
because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll([n, m]) {
    let result = 0;
    const start = Math.min(n, m);
    const end = Math.max(n, m);

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
}

console.log(sumAll([1, 4])); // 10