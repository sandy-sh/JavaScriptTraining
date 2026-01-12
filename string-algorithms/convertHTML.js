/*
User Stories:

1. You should have a convertHTML function that accepts a string as an argument.
2. The convertHTML function should return a new string by converting special characters
 in the argument string to their corresponding HTML entities.
    & should be converted to &amp;.
    < should be converted to &lt;.
    > should be converted to &gt;.
    " should be converted to &quot;.
    ' should be converted to &apos;.
*/


function convertHTML(str) {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    return str.replace(/[&<>"']/g, char => map[char]);
}
console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"