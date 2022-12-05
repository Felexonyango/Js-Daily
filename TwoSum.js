// Example 1: Input: nums = [2,7,11,15],
// target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

 const twoSum=(nums,target)=> {

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //       if (nums[i] + nums[j] === target) {
    //         return [i, j];
    //       }
    //     }
    //   }

        let numObj = {};
        for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined) {
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
        }
        
};









