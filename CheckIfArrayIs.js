// Check if Array Is Sorted and Rotated
// [3,4,5,1,2]


var issortedAndRotated = function(nums) {

    let rotated = false;
  
    // Check if the array is sorted in non-decreasing order and if it was rotated
    for (let i = 1; i < nums; i++) {
      if (nums[i] < nums[i - 1]) {
        if (rotated) {
          return false;
        }
        rotated = true;
      }
    }
  
    // If the array was not rotated, then it is already sorted in non-decreasing order
    if (!rotated) {
      return true;
    }
  
    // Check if the array was rotated by checking if the first element is greater than the last element
    return nums[0] >= nums[nums.length - 1];
  }
  console.log(issortedAndRotated())

