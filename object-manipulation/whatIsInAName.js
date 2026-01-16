/*
User Stories:

1. You should have a WhatIsInAName function that accepts two arguments, an array of objects and a source object.
2. The WhatIsInAName function should return a new array containing only the objects from the collection that have
all the key-value pairs present in the source object.
3. If noobjects match all the key-value pairs in the source object, the function should return an empty array.
*/

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection.filter(obj => 
        sourceKeys.every(key => 
            obj.hasOwnProperty(key) && obj[key] === source[key]
        )
    );
}

console.log(whatIsInAName(
    [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }
)); // [{ first: "Tybalt", last: "Capulet" }]
