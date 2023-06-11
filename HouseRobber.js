var rob = function (nums) {
    if (!nums) return null;
      let prevMax = 0;
      let currMax = 0;
      for (let i = 0; i < nums.length; i++) {
        let temp = currMax;
        currMax = Math.max(prevMax + nums[i], currMax);
    
        prevMax = temp;
      }
      return currMax;
  
  };
  
  console.log(rob([2, 7, 9, 3, 1]));
  