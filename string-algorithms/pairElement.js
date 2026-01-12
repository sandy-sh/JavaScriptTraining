/*
User Stories:

1. You should have a dropElements function that accepts an array (arr) and a function (func) as arguments.
2. The dropElements function should iterate through the array and remove elements 
starting from the first one until func returns true for an element.
3. The dropElements function should return the remaining elements in the array if the condition is met
4. If the condition is never satisfied, it should return an empty array.
*/

const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
};

function pairElement(dna) {
    return [...dna].map(base => [base, pairs[base]]);
}

console.log(pairElement("GCG")); // [["G", "C"], ["C", "G"], ["G", "C"]]
