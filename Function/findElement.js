function findElement(arr, func) {
  for(let data of arr) {
    if(func(data)) return data
  }
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) //Should return 8

console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; })) //Should return "javascript"