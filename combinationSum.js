const backtrack = (candidates, target, start, combination, result) => {
    if (target === 0) {
      result.push([...combination]);
      return;
    }
    
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) {
        continue;
      }
      
      combination.push(candidates[i]);
      backtrack(candidates, target - candidates[i], i, combination, result);
      combination.pop();
    }
  };
  
  function combinationSum(candidates, target) {
    const result = [];
    backtrack(candidates, target, 0, [], result);
    return result;
  }
  
  console.log(combinationSum([2, 3, 5], 8));
  