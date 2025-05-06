function narcissistic(value) {
  const numString = value.toString();
  const numArr = [];
  let sum = 0;
  
  for(let i = 0; i < numString.length; i++) {
    const calc = Number(numString[i]) ** numString.length;
    numArr.push(calc)
  }
  
  for(let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  
  return sum === value ? true : false;
}
​