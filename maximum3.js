// Tomorrows HHC. Given an integer array nums,
// return the third distinct maximum number in this array.
//  If the third maximum does not exist, return the maximum number.

function thirdMaximum(nums) {
    nums = [...new Set(nums)].sort((a,b) => b-a);
    
    if(nums.length >=2){
        return nums[0] //this means the largest will be at index[0]
    }
    else{
        return nums[2]
    }

}
console.log(thirdMaximum([3,2,1]))

