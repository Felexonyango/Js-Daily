function distinctDifferenceArray(nums) {
    let arr = []; 

    for(let i=0; i<nums.length; i++){ 
        let prefix = nums.slice(0,i+1); 
        let suffix = nums.slice(i+1);
        let diff = [...new Set(prefix)].length - [...new Set(suffix)].length; 
        arr.push(diff);
    } 
    return arr;
};