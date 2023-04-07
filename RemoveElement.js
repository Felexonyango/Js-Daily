// Given an integer array nums and an integer val, remove all occurrences of
//  val in nums in-place. The relative order of the elements may be changed.
function removeElement( nums,val){ 
    var j = 0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]!==val){
            nums[j++] = nums[i];
        }
    }
    return j;

}
console.log(removeElement([1,2,3],4))