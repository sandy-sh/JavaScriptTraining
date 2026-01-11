function titleCase(str) {
    const words = str.toLowerCase().split(' ');
    const result = [];

    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    } 
    
    return result.join(' ');
}

console.log(titleCase("hello world from javascript"));