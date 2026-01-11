function repeatStringNumTimes (str, times) {
  let base = str;

  if(times <= 0) return "";
  for(let i = 1; i < times; i++) base += str;
  return base;
}

console.log(repeatStringNumTimes("*", 3));