function mutation(arr) {
    const base = arr[0].toLowerCase();
    const test = arr[1].toLowerCase();

    for (const char of test) {
        if(!base.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true