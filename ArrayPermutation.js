
function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(4));
//123
function rearrangeArray(nums) {
  const result = [];
  const backtrack = (nums, current) => {
    if (current.length === nums.length) {
      //current is permutation that will be constructed
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (current.includes(nums[i])) {
        continue;
      }
      current.push(nums[i]);
      backtrack(nums, current);
      current.pop();
    }
  };
  backtrack(nums, []);
  return result;
}
console.log(rearrangeArray([1, 2, 3]));

