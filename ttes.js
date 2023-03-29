function test(integer) {
  const sortedArray = integer.sort((a, b) => a - b);
  let target = 1;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] <= target) {
      //if element is smaller than target, add element  to the target
      sortedArray[i] += target;
    } else {
      return target;
    }
  }
}
console.log(test([2, 5, 7, 6, 3]));
