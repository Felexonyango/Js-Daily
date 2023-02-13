function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) { //checks the value of current index in array is equal to target
      return i;
    }
  }
  return nums.length;
}
console.log(searchInsert([1, 3, 5, 6], [5]));
 
//idea is to find index of target value in sorted array
// so iterate through sorted array  and compare the value at each index  to the target value

// If the target is larger than all the values in the array, the loop exits, and the function returns
// the length of the array, which is the index where the target should be inserted.
