


var maxProfit = function (nums){
    let [left,right,max] = [0,1,0]

    while(right < nums.length){
        let canSlide = nums[left] >= nums[right];
        if(canSlide) left = right;

        let currentMax = nums[right] - nums[left];

        max = Math.max(max,currentMax)

        right++;
    }

    return max;
}
var maxProfit = function (nums){
    let [left,right,max] = [0,1,0]

    while(right < nums.length){
        let canSlide = nums[left] >= nums[right];
        if(canSlide) left = right;

        let currentMax = nums[right] - nums[left];

        max = Math.max(max,currentMax)

        right++;
    }

    return max;
}


