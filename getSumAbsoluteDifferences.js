// var getSumAbsoluteDifferences = function (nums) {
//   let sum = 0;
//   let result = [];
//   let diff = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//         console.log(`${nums[j],nums[i]}`)
//        diff = Math.abs(nums[i])  -Math.abs(nums[j]);
//       if (diff) {
//         sum += diff;
   
//     }
//     result.push(sum)
//     }
//   }
//   return result
// };
// console.log(getSumAbsoluteDifferences([2, 3, 5]));

var getSumAbsoluteDifferences = function (nums) {
    let started=0;
    let result = [];
    for (let i = 1; i < nums.length; i++) {
      let data=Math.abs(nums[i]-nums[0])
       started+=data
    } 

      result[0]=started
      
    for(let i=1;  i<nums.length; i++){
        const diff = nums[i]-nums[i-1];
        
        result[i] = result[i-1] - (nums.length-(2*i)) * diff;
    }
    
    return result;
    
    }
   console.log(getSumAbsoluteDifferences([2, 3, 5]));
