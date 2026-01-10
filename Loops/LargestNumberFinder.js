function largestOfAll (arr) {
  let largest = 0;
  let arrOfLargest = [];

  for (const nums of arr) {
    largest = nums[0];
    for (const num of nums) {
      if (num > largest) {
        largest = num;
      }
    }
    arrOfLargest.push(largest)
    largest = 0;
  }

  return arrOfLargest;
}

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //[27, 5, 39, 1001]

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); //[25, 48, 21, -3]