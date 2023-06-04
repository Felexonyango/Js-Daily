// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
function sortArrayByParity(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.unshift(nums[i]);
    } else  {
      result.push(nums[i]);
    }
  }
  return result;
}
console.log(sortArrayByParity([3, 1, 2, 4, 8, 9]));

function sortArrayBySwap(nums) {
    let oddIdx = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            [nums[i], nums[oddIdx]] = [nums[oddIdx], nums[i]];  
            //nums[i] will be even number based on condition and nums[oddIdx] will be odd that remains  .then increment
            oddIdx++;
        }
    }
    
    return nums;
}
console.log(sortArrayBySwap([3, 1, 2, 4, 8, 9]));
