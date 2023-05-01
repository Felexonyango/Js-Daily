function isIsogram(nums){
    let result ={}

    for(let i = 0; i < nums.length; i++){
        let letter = nums[i]
       if(letter in result){
         return false
       }
       result[letter] = true;
    }
    return true


}
console.log(isIsogram("machine"))

