// var minSubArrayLen = function(target, nums) {
//     let minLength = Infinity;
//     let left = 0;
//     let sum = 0;

//     for (let right = 0; right < nums.length; right++) {
//         sum += nums[right];
//         console.log(sum,'test')

//         while (sum >= target) {
//             //check minimum possible combination
//             minLength = Math.min(minLength, right - left + 1);
//             sum -= nums[left];
//             left++;
//         }
//     }

//     return minLength !== Infinity ? minLength : 0;
// };
// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))

var subarraySum = function(nums, k) {
  
    let sum =0
    let left =0;
    let totalNumber=0
    for(let right=0; right<nums.length;right++){
    sum+=nums[right];

    while(sum==k){
        totalNumber=(right-left+1)
        sum -= nums[left];
        left++

    }
    }
    return totalNumber

     
};
console.log(subarraySum([1,1,1],2))

