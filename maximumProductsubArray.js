// var maxProduct = function(nums) {
//     if (nums.length === 0) {
//       return 0;
//     }
  
//     let maxEnding = nums[0]; 
//     let minEnding = nums[0]; 
//     let maxSoFar = nums[0]; 
  
//     for (let i = 1; i < nums.length; i++) {
//       const tempMax = maxEnding;
 
//       maxEnding = Math.max(nums[i], nums[i] * maxEnding, nums[i] * minEnding);
//       minEnding = Math.min(nums[i], nums[i] * tempMax, nums[i] * minEnding);
  
     
//       maxSoFar = Math.max(maxSoFar, maxEnding);
//     }
  
//     return maxSoFar;
//   };
//   console.log(maxProduct([5,4,-1,7,8]))

  var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            // Swap maxProd and minProd when encountering a negative number
            [maxProd, minProd] = [minProd, maxProd];
        }

        // Update max and min products ending at the current index
        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);

        // Update the overall result
        result = Math.max(result, maxProd);
    }

    return result;
};

console.log(maxProduct([5, 4, -1, 7, 8]));

