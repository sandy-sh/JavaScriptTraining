let lunches = [];

function addLunchToStart (lunches, lunchItem) {
lunches.unshift(lunchItem);
return `${lunchItem} added to the start of the lunch menu.`
}

function addLunchToEnd (lunches, lunchItem) {
lunches.push(lunchItem);
return `${lunchItem} added to the end of the lunch menu.`
}

function removeLastLunch (lunches) {
  
}