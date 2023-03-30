function countNonTargetElements(nums, val) {
  if (!nums) return null;
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i]; //valid postion of elements
      count++;
    }
  }
  return count;
}
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
console.log(countNonTargetElements(nums, val));
