
function letterCombinations(nums){
    if(nums == ""){
     return [];
    }
    const data = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const result = [];
  
    const combination = (index, path) => {
      if (index === nums.length) {
        result.push(path);
        return;
      }
  
      for (const ch of data[nums[index] - '0']) {
        combination(index + 1, path + ch);
      }
    }
  
    combination(0, '');
    return result;
  }
  console.log(letterCombinations('23'))