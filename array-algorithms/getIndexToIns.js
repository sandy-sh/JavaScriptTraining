/*
User Stories:

1. You should have a getIndexToIns function that takes two arguments: an array and a number.
2. You should use the sort method to sort the array in ascending order.
3. Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
4. Your getIndexToIns function should always return a number.
*/

function getIndexToIns (arr, num) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const index = sorted.findIndex(n => n >= num);

    return index >= 0 ? index : sorted.length;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5)); //1
console.log(getIndexToIns([20, 3, 5], 19)); //2
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //2
console.log(getIndexToIns([], 5)); //0
console.log(getIndexToIns([3, 10, 5], 11)); //3