function arraySum(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum +=n[i];
  }
  return sum;
}
console.log(arraySum([1, 2, 3, 4, 5, 6]));



function arraySums(n) {

  let result = n.reduce((sum, current) => sum + current, 0);  
  //initializing sum as 0, current is the first array element on first run
// On the second run, sum = 1, we add the second array element (2) to it and return.
// On the 3rd run, sum = 3 and we add one more element to it, and so on…
  return result;
}
console.log(arraySums([1, 2, 3, 4, 5, 6]));
