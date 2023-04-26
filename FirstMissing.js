 function smallestMissingPositive(nums) {
  const n = nums.length;
  const marked = new Array(n + 1).fill(false); // initialize array to all false
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0 && nums[i] <= n) {
      marked[nums[i]] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!marked[i]) {
      return i;
    }
  }

  return n + 1;
}

console.log(smallestMissingPositive([1, 2, 4]));

