/*
User Stories:

1. Your function diffArray should return an array.
2. Your function should wake two arguments, both of which are arrays. 
3. Your function should make use of the filter method.
4. Your function should return the symmetric difference of the two arrays.
5. Your function should return an empty array if there is no symmetric.
*/

function diffArray (arr1, arr2) {
    return [
        ...arr1.filter(x => !arr2.includes(x)),
        ...arr2.filter(x => !arr1.includes(x))
    ]
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]));