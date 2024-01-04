var lengthOfLongestIncreasingSubsquence = function(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    // Initialize an array to store the length of the LIS ending at each index
    let dp = new Array(nums.length).fill(1);
  
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
  
    // Find the maximum value in the dp array
    return Math.max(...dp);
  };