function arrayPair(nums) {
    let sortedNumber = nums.sort((a, b) => a - b);  //ascending order
    let sum = 0;
    for (let i = 0; i < sortedNumber.length; i++) { //iterate through array 
      if (i % 2 === 0) {  //check is its divisible
          sum+=sortedNumber[i]   //sum =sum+sortedNumber[i]
      }
  
    } 
    return sum
  }
  
  console.log(arrayPair([1,4,3,2]))
  //[1,2] -->1
  //[3,4] -->3
  //1+3