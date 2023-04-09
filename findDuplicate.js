// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
var findDuplicate = function(nums) {
    let duplicate ={}
    for(let i = 0; i < nums.length; i++){
    if(duplicate[nums[i]]) return nums[i] //if object duplicate contains the element

    duplicate[nums[i]] =1
                
    }
};
console.log(findDuplicate([1,3,4,2,2]))