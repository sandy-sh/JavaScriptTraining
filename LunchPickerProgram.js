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

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lastLunch = lunches.pop();
    console.log(`${lastLunch} removed from the end of the lunch menu.`);
    return lunches;
  }
}

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lastLunch = lunches.shift();
    console.log(`${lastLunch} removed from the start of the lunch menu.`);
    return lunches;
  }
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToStart(lunches, "Sushi"));
console.log(removeLastLunch(lunches));
console.log(removeFirstLunch(lunches));