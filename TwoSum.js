// Example 1: Input: nums = [2,7,11,15],
// target = 9 Output: [0,1] Explanation:
//Because nums[0] + nums[1] == 9, we return [0, 1].
//using array
const twoSums = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
}

const threesums=(num1,num2,target)=>{
    for(let i=0;i<num1;i++) {
        for(let j=0;j<num2;j++) {
        if(num1[i]+num2[j] ===target){
            console.log(i)
        }
        }
    }
}

console.log(threesums([1, 2,5, 15], [4, 7, 8, 15], 9)); // Output: [2, 7]



//using hashmap
 const twoSum =(nums,target)=>{
    const map =new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target - nums[i]), i];

        }
        map.set(nums[i], i);
    }
 
 }
 console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]


  

