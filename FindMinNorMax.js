var findNonMinOrMax = function(nums) {
    if(nums.length <=2) return -1

    let output = -1
    let min = Infinity;
    let max = -Infinity;
  for(let i=0;i<=nums.length;i++){
    let currentNumber = nums[i]
    if(currentNumber < min){
        max=min
        min=currentNumber

    }
    else if(currentNumber > min && currentNumber < max){
        max = currentNumber

    }
  }
  if (max !== -Infinity) {
    output = max;
  }
  return output
};
console.log(findNonMinOrMax([1,2]))
