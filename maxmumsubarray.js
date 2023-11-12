// Kadane's algorithm   
// var maxSubArray = function(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }

//     let maxEndingHere = nums[0];
//     let maxSoFar = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         // Compare current element with the sum of current element and maxEndingHere
      
//         maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

//         // // Compare maxSoFar with maxEndingHere to update maxSoFar if needed
//          maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }

//     return maxSoFar;

// };
// console.log(maxSubArray([5,4,-1,7,8]))


//dynamic programming 

var maxSubArrayd= function(nums){
    if (nums.length === 0) {
        return 0;
    }
    let dp =new Array(nums.length)

    dp[0]=nums[0];

     let maxSoFar =dp[0]
    for(let i=1; i<nums.length; i++) {
        dp[i]=Math.max(nums[i], nums[i] + dp[i-1])
   
         maxSoFar = Math.max(maxSoFar, dp[i]);
         
    }
    return maxSoFar

}
console.log(maxSubArrayd([5,4,-1,7,8]))
