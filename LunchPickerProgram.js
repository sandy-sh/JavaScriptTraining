let lunches = [];

function addLunchToEnd(lunches, lunchItem) {
  lunches.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, lunchItem) {
  lunches.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunches;
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToStart(lunches, "Sushi"));