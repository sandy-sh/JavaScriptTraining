/*
User Stories:

1. You should have a dropElements function that accepts an array (arr) and a function (func) as arguments.
2. The pairElement function should return a 2d array, where each inner array has two strings inside, 
the first string is one base from the input, and the second string the paired base.
3. When given A, the function should pair it with T.
4. When given T, the function should pair it with A.
5. When given C, the function should pair it with G.
6. When given G, the function should pair it with C.
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
