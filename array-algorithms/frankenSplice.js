function frankenSplice(input, arr, index) {
  const inputArr = input.slice();
  const resultArr = arr.slice();

  resultArr.splice(index, 0, ...inputArr)
  return resultArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))