//idea is to get the way expected heights elements will be versus  the given elements .
//If they by there is any element that does not match get the count  and return the count .
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

// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]

