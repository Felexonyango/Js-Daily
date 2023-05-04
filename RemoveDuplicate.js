const removeDuplicatesAndGetTotalUnique = (nums) => {
  const complement = {};
  const uniqueNums = [];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (!(number in complement)) {
      complement[number] = i;
      total++;
    //   uniqueNums.push(number);
      nums[total - 1] = number;
    }
  }
  return total;
};
console.log(removeDuplicatesAndGetTotalUnique([1, 1, 2, 4]));

//write algorithm to remove duplicated of sorted array  in javascript?

var removeDuplicatess = function (nums) {
  let hashmap ={}
  let result = [];
  for (let i = 1;  i < nums.length; i++) {
    let number = nums[i];
    if(!(number in hashmap)){
     hashmap[number] =true
      result.push(number);
    }
  }
  return result;
};

console.log(removeDuplicatess([1, 1, 2, 4]));
