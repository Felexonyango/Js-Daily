function bubbleSort(nums){
    for(var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length -1 ;j++){
     
            if(nums[j]>nums[j+1]){

                // [[nums[j],nums[j+1]]]= [[nums[j+1],nums[j]]]
                var temp = nums[j]
                nums[j] = nums[j+1]
                nums[j + 1] = temp;
            }

        }
    }
    return nums;
}
var myArray = [3, 6, 2, 8, 1, 5];
console.log(bubbleSort(myArray)); // Output: [1, 2, 3, 5, 6, 8]
