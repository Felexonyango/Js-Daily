
function SearchInRotatedArray(nums, target) {
  //Use binary search

  let left = 0; //first element
  let right = nums.length - 1; //last element

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = nums[mid];

    if (value ===target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }

      //if right is sorted
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }   
  return -1 
}

console.log(SearchInRotatedArray([4,5,6,7,0,1,2],0))