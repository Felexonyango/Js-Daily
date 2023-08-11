

const backtrack = (nums, start, combination, result) => {
    if (start === nums.length) {
      result.push([...combination]);
      return;
    }
    
    for (let i = start; i < nums.length; i++) {
      combination.push(nums[i]);
      backtrack(nums, i + 1, combination, result);
      combination.pop();
    }
  };
  
  function findSubsets(nums) {
    const result = [];
    backtrack(nums, 0, [], result);
    return result;
  }
  
  console.log(findSubsets([1, 2, 3]));
  
