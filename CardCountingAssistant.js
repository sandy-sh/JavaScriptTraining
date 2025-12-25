let count = 0;

function cardCounter (card) {
  if ([2, 3, 4, 5, 6].includes(card)) {
    count++;
  } else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(10);