/*
User Stories

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.
*/

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}   


function smallestCommons([n, m]) {
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    let result = min;
    for (let i = min + 1; i <= max; i++) {
        result = lcm(result, i);
    }

    return result;
}

    // const range = [];

    // for (let i = min; i <= max; i++) {
    //     range.push(i);
    // }

    // let multiple = max;
    // while (true) {
    //     if (range.every((num) => multiple % num === 0)) {
    //         return multiple;
    //     }
    //     multiple += max;
    // }

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));