function isPalindrome (word) {
    word = word.toLowerCase();

    return word.split('').reverse().join('').toLowerCase() === word ? true : false;
}

function findPalindromeBreaks (words) {
    if (words.length === 0) return [];

    const result = []

    for (let i = 0; i < words.length; i++){
        const word = words[i].toLowerCase();

        if (word !== words[i].split('').reverse().join('').toLowerCase()) {
            result.push(i);
        }
    }

    return result;
}

function findRepeatedPhrases (words, phraseLength) {
    if (phraseLength >= words .length) return [];

    const seen = {};

    for (let i = 0; i <= words.length - phraseLength; i++) {
        const phrase = words.slice(i, i + phraseLength).join(" ");

        if (!seen[phrase]) {
            seen[phrase] = [];
        }
        seen[phrase].push(i);
    }

    const result = [];
    for (const phrase in seen) {
        if (seen[phrase].length > 1) {
            result.push(...seen[phrase]);
        }
    }

    return result.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
    if (!texts || texts.length === 0) return [];

    return texts.map(wordArray => {
        return {
            KataBerulang: findRepeatedPhrases(wordArray, phraseLength), 
            KataPalindrom: findPalindromeBreaks(wordArray)              
        };
    });
}

console.log(isPalindrome('level'));
console.log(findPalindromeBreaks(['level', 'car', 'racecar', 'cat']));
console.log(findRepeatedPhrases(["saya", "makan", "nasi", "saya", "makan", "nasi"], 2));
console.log(isPalindrome('lEvel'));
console.log(analyzeTexts([['level', 'car', 'racecar', 'cat'], ['saya', 'makan', 'nasi', 'saya', 'makan', 'nasi']], 2));