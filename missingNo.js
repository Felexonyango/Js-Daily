
var missingNumber = function (nums) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
      let expected =i+1
      sum =expected-nums[i]
       
    }
  
    return sum;
  };
  console.log(missingNumber([4,6]))