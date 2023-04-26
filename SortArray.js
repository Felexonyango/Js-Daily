let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const numbers = [4, 2, 5, 1, 3];

numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  //  we are creating a new array left that contains the elements from index 0 up
  //   to but not including the mid index of nums.
  // This means that left will contain the first half of the elements in nums.
  const right = nums.slice(mid);
  // In the line const right = nums.slice(mid),
  //  we are creating a new array right that contains the elements from the mid index to the end of nums.
  //  This means that right will contain the second half of the elements in nums.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      //compares the first elements of each array,pushing the smaller element to the result
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right); //concating the result found
}

const nums = [3, 2, 1, 5, 4];
const sortedNums = mergeSort(nums);
console.log(sortedNums); // Output: [1, 2, 3, 4, 5]

//sort array by swapping

var sortArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    while (j >= 0 && nums[j + 1] < nums[j]) {
      [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
      j--;
    }
  }
  return nums;
};
console.log(sortArray([5, 2, 3, 1]));

//bubble sorting 

var sortArrays = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
   // for checking neighborhood element
   for(let j =i+1; j < nums.length; j++) {
    if(nums[i]> nums[j]) {
      [nums[i], nums[j]] =[nums[j],nums[i]]
    }
   }
  }
  return nums
};

console.log(sortArrays([5, 2, 3, 1]));
