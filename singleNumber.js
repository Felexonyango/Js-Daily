// Input: nums = [2,2,1]
// Output: 1
var singleNumber = function (nums) {
  if (!nums) return null;
  nums.sort();
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      return nums[i];
    }
  }
};
let nums = [2, 2, 3,1,4];
console.log(singleNumber(nums));
