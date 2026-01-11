function bouncer(arr) {
  const result = [];

  for (const data of arr) {
    if (data) result.push(data);
  }

  return result
}

console.log(bouncer([7, "ate", "", false, 9]));