// 153. Find Minimum in Rotated Sorted Array
var findMin = function(nums) {
    let result=nums[0]
    for(var i=0; i<nums.length; i++){
      
      result =Math.min(result, nums[i])
    }
    return result
};
console.log(findMin([3,4,5,1,2]))

// Find Minimum in Rotated Sorted Array II
