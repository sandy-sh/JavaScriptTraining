function pyramid (char, rows, isReversed) {
  let result = "\n";

  if (!isReversed) {
    for(let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);
      let block = char.repeat(2 * i - 1);
      result += spaces + block + "\n";
    }
  } else {
    for(let i = rows; i >= 1; i--) {
      let spaces = " ".repeat(rows - i);
      let block = char.repeat(2 * i - 1);
      result += spaces + block +"\n";
    }
  }

  return result;
}

console.log(pyramid("p", 4, false));