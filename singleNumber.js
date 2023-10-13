// Input: nums = [2,2,1]
// Output: 1
// var singleNumber = function (nums) {
//   if (!nums) return null;
//   nums.sort();
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       i++;
//     } else {
//       return nums[i];
//     }
//   }
// };
// let nums = [2, 2, 3,1,4];
// console.log(singleNumber(nums));



function findSingleNumberInArray(nums){
let result={}
  for(let i=0;i<nums.length;i++){
    const currentNumber = nums[i]
  
    if(result[currentNumber]){
    result[currentNumber]++
    }
    else{
    currentNumber
    }
    return result[currentNumber]=1
  }

}
console.log(findSingleNumberInArray([2, 2,1]))
