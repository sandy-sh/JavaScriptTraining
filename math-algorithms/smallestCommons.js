function smallestCommons([n, m]) {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    const range = [];
    
    for (let i = min; i <= max; i++) {
        range.push(i);
    }

    let multiple = max;
    while (true) {
        if (range.every((num) => multiple % num === 0)) {
            return multiple;
        }
        multiple += max;
    }
}

console.log(smallestCommons([1, 5]));