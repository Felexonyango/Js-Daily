var findGCD = function (nums) {
    if (!nums || nums.length === 0) return null; // return null if input is invalid
    if (nums.length === 1) return nums[0]; // return the single element if input has length 1
    nums = nums.sort((a, b) => a - b);
    let smallest = nums[0];
    let largest = nums[nums.length - 1];
    for (let i = smallest; i >= 1; i--) { // iterate from the smallest element down to 1
      if (smallest % i === 0 && largest % i === 0) { // check if i is a common divisor of the smallest and largest elements
        return i;
      }
    }
    return 1; // if no common divisor is found, return 1
  };
  console.log(findGCD([2,5,6,9,10]))
  