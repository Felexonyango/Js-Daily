// Check if Array Is Sorted and Rotated
// [3,4,5,1,2]


var issortedAndRotated = function(nums) {

    let rotated = false;

    for (let i = 1; i < nums; i++) {
      if (nums[i] < nums[i - 1]) {
        if (rotated) {
          return false;
        }
        rotated = true;
      }
    }
  
    if (!rotated) {
      return true;
    }
  
    return nums[0] >= nums[nums.length - 1];
  }
  console.log(issortedAndRotated())

