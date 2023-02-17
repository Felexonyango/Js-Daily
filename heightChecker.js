var heightChecker = function (heights) {
  const expected = [...heights].sort((a, b) => a - b); //to avoid modification of original array
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count += 1;
    }
  }
  return count;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
