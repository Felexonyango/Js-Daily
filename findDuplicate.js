console.time('myFunction'); 
var findDuplicate = function(nums) {
    let duplicate ={}
    for(let i = 0; i < nums.length; i++){
    if(duplicate[nums[i]]) return nums[i] 
    duplicate[nums[i]] =1
                
    }

};
console.log(findDuplicate([1,3,4,2,2]))
console.timeEnd('myFunction');