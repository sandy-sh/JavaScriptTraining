function findLongestWordLength(sentence) {
  const words = sentence.trim().split(/\s+/);
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}