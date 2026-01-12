/*
User Stories:

1. You should have a dropElements function that accepts an array (arr) and a function (func) as arguments.
2. The dropElements function should iterate through the array and remove elements 
starting from the first one until func returns true for an element.
3. The dropElements function should return the remaining elements in the array if the condition is met
4. If the condition is never satisfied, it should return an empty array.
*/

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
        return arr.slice(i);
        }
    }
    return [];
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); // [3, 4]
