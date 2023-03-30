// Input: nums = [2,2,1]
// Output: 1
var singleNumber = function (nums) {
  if (!nums) return null;
  nums.sort();
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      // if the current element is equal to the next element increment

      i++;
    } else {
      return nums[i];
    }
  }
};
let nums = [2, 2, 1];
console.log(singleNumber(nums));
