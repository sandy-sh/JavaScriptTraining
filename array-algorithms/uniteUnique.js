/*
User Stories:

1. You should have a function named `uniteUnique``
2. The `uniteUnique` function should accept two or more arrays as arguments.
3. The function should return a new array that contains unique values from the argument arrays, 
in the order they are first found in the arguments. 
For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].
*/


function uniteUnique (...arr) {
    const result = [];

    for (const group of arr) {
        for (const num of group) {
        if (!result.includes(num)) {
                result.push(num);
            }
        }
    }
    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/* High performance version using Set */

/*
function uniteUnique (...arr) {
    const seen = new Set();
    const result = [];

    for (const group of arr) {
        for (const num of group) {
            if (!seen.has(num)) {
                seen.add(num);
                result.push(num);
            }
        }
    }
    return result;
}
*/ 