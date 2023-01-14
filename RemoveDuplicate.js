const removeDuplicates = (nums) => {

    const  complement={}
    let total=0;
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        if(!(num in complement)){
            complement[nums] = i;
            total++;
                   
            nums[total-1 ]=num;
        }
        return total;


    }
};
console.log(removeDuplicates([1,1,1,2,2,3,3,4]))

//write algorithm to remove duplicated of sorted array  in javascript?


// var removeDuplicatess = function(nums) {
//     let j = 0;
//     for (let i = 1, len = nums.length; i < len; i++) {
//         if (nums[i] !== nums[j]) {
//             nums[++j] = nums[i];
//         }
//     }
    
//     return j + 1;    
// };`

// console.log(removeDuplicatess([0,0,1,1,1,2,2,3,3,4]))



