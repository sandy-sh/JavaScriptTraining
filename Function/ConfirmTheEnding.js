function confirmEnding(str, strEnd) {
    if (strEnd.length > str.length) return false;
    return str.slice(str.length - strEnd.length) === strEnd;
      }



console.log(confirmEnding("Connor", "n"));