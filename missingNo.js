
var missingNumber = function (nums) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += i + 1 - nums[i];
    }
  
    return sum;
  };
  console.log(missingNumber([4,6]))