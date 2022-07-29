
//     /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
//  function remove(nums, val) {
//   const position = nums.findIndex(number => number === val);

//   if(position === -1) {
//     return nums.length;
//   } else {
//     nums.splice(position, 1);
//   }

//   return remove(nums, val);
// };
// console.log(remove([3,2,2,3],3))
function remove(nums, val){

for (let index = 0; index < nums.length; index++) {

    const element = nums[index];

    if(element === val){

        nums.splice(index, 1);

        remove(nums, val)

    }

}

return nums;

}



console.log(remove([2,3,4,5,5,6,7,4,5,79], 4));
  