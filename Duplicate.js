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
