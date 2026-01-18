/*
User Stories:

1. You should have a function named truthCheck.
2. The truthCheck function takes two arguments: an array of objects and a string representing a property name found in those objects.
3. The function should check if the property with the name equal to the second argument has a truthy value in all the objects of the array, 
and return true if it has, and false otherwise.
*/

function truthCheck(collection, pre) {
    return collection.every(obj => Boolean(obj[pre]));
}

console.log(truthCheck(
    [
        { name: "Quincy", role: "Founder", isBot: false },
        { name: "Naomi", role: "", isBot: false },
        { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "isBot"
)); // false

console.log(truthCheck(
    [
        { name: "Quincy", role: "Founder", isBot: false },
        { name: "Naomi", role: "CEO", isBot: false },
        { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "role"
)); // true