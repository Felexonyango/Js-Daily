// Given an integer array nums and an integer val, remove all occurrences of
//  val in nums in-place. The relative order of the elements may be changed.
function removeElement( nums,val){ 
    var j = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[j++] = nums[i];
            // allows the function to remove all occurrences of the value val from the original nums array,
            //  while maintaining the relative order of the other elements in the array.
        }
    }
    return j;

}
console.log(removeElement([1,2,3,4],4))