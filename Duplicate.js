function containDuplicate(nums){
    let  hasmap =new Map()
    for(let i=0;i<nums.length;i++){
        if(hasmap.has(nums[i])){
            return true
        }
        else {
            hasmap.set(nums[i],true)  
        }
    }
    return false

}
console.log(containDuplicate([1,2,3,3]))


function containDuplicates(nums){
    let array={}
    for(let i=0;i<nums.length;i++){
        if(array.includes(nums[i])){
            return true
        }
        else {
           return false  //it adds current element to array  to map if it does not exist
        }
    }
    
}
console.log(containDuplicate([1,2,3,3]))
// Duplicate 11

var containsNearbyDuplicate = function(nums, k) {
    // The line of code is checking if the current index, i, is less than or equal to the difference between 
    // the current index and the index stored in the hashmap for the current element, nums[i]
    const result = {};
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]] || result[nums[i]] === 0) {
            if (i - result[nums[i]] <= k) { // 
                return true;
            }
        }
      result[nums[i]] = i;
    }
    return false;
};
console.log(containsNearbyDuplicate([[1, 2, 3, 1, 2, 1]],[2]))



function countUniqueElements(nums){
    let count = 0;
    let  result={}
    for(let i=0; i<nums.length; i++){
      let number = nums[i]
      if(!(number in result)){
        result[number] = i;
         count ++
      }

    }
    return count

}
console.log(countUniqueElements([6,8,1,2,2,3,4,5]))
