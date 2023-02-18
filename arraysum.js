function arraySum(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum = sum + n[i];
  }
  return sum;
}
console.log(arraySum([1, 2, 3, 4, 5, 6]));

function arraySums(n) {
  let result = n.reduce((sum, current) => sum + current, 0);
  return result;
}
console.log(arraySums([1, 2, 3, 4, 5, 6]));
