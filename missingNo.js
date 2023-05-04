var missingNumber = function(nums) {
  for(let i = 0; i <= nums.length; i++){
  //check the index o the array will be 0,1,2,3,4. then check if array given misses one of the index then returns 
      if(!nums.includes(i))
          return i;
  }
};
console.log(missingNumber([1,3,4]))