//example 1
const LargestNumbers = (nums) => {
  nums.sort((a, b) => `${b}${a} - ${a}${b}`);
  return nums[0] === 0 ? "" + nums[0] : nums.join("");
};

//example 2
function LargestNumber(nums) {
 
  const strNums = [];
  for (let i = 0; i < nums.length; i++) {
    strNums.push(nums[i].toString());
  }

  const compareFunc = (a, b) => {
    const order1 = a + b;
    const order2 = b + a;
    if (order1 > order2) {
      return -1; // a comes before b
    } else if (order1 < order2) {
      return 1; // b comes before a
    } else {
      return 0; // order doesn't matter
    }
  };
  // Sort the numbers using the custom sorting function
  for (let i = 0; i < strNums.length; i++) {
    for (let j = i + 1; j < strNums.length; j++) {
      if (compareFunc(strNums[i], strNums[j]) === 1) {
        // Swap the two strings
        const temp = strNums[i];
        strNums[i] = strNums[j];
        strNums[j] = temp;
      }
    }
  }

  let result = "";
  for (let i = 0; i < strNums.length; i++) {
    result += strNums[i];
  }

  if (result[0] === "0") {
    return "0";
  }
  return result;
}
console.log(LargestNumber([]))
