/*
User Stories:

1. You should have a function named steamrollArray.
2. The steamrollArray function should accept one argument: a nested array.
3. The function should flatten the nested array, accounting for varying levels of nesting.
4. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
5. Global variables should not be used
*/
function steamrollArray (arr) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
        result.push(...steamrollArray(item));
        } else {
        result.push(item);
        }
    }

    return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]))