

const backtrack = (nums, start, combination, subsets ) => {
    if (start === nums.length) {
      subsets .push([...combination]);
      return;
    }
    
    for (let i = start; i < nums.length; i++) {
      combination.push(nums[i]);
      backtrack(nums, i + 1, combination, subsets );
      combination.pop();
    }
  };
  
  function findSubsets(nums) {
    const subsets  = [];
    backtrack(nums, 0, [], subsets );
    return subsets ;
  }
  
  console.log(findSubsets([1, 2, 3]));
  
