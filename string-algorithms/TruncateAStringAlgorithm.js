// const str = "Absolutely Longer";
// const num = 3;

function truncateString(str, num) {
    return str.length <= num ? str : str.slice(0, num) + "...";
}

console.log(truncateString("Absolutely Longer", 3));

