//Given an array of random numbers, push all the zero’s of a given array to the end of the array.
// For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0},
// it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}.

function moveZerostoLast(array) {
  
  for(let i=0; i<array.length; i++){
      if(array[i]===0){
          array.splice(i,1)
          array.push(0)  
      }

  }
  return array

  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = moveZerostoLast(left);
  const sortedRight = moveZerostoLast(right);

  let i = 0;
  let j = 0;
  while (i < sortedLeft.length || j < sortedRight.length) {
    if (i >= sortedLeft.length) {
      array[i + j] = sortedRight[j];
      j++;
    } else if (j >= sortedRight.length) {
      array[i + j] = sortedLeft[i];
      i++;
    } else if (sortedRight[j] === 0) {
      j++;
    } else {
      array[i + j] = sortedRight[j];
      j++;
    }
  }
  return array;
}

console.log(moveZerostoLast([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));

// function moveZerosToLeft(nums) {
//   //using mergeSort
//   if (nums.length <= 1) {
//     return nums;
//   }

//   const mid = Math.floor(nums.length / 2);
//   const left = nums.slice(0, mid);
//   const right = nums.slice(mid);

//   const sortedLeft = moveZerosToLeft(left);
//   const sortedRight = moveZerosToLeft(right);

//   let i = 0;
//   let j = 0;
//   let k = 0;
//   while (i < sortedLeft.length || j < sortedRight.length) {
//     if (i >= sortedLeft.length) {
//       nums[k++] = sortedRight[j++];
//     } else if (j >= sortedRight.length) {
//       nums[k++] = sortedLeft[i++];
//     } else if (sortedLeft[i] === 0) {
//       nums[k++] = sortedLeft[i++];
//     } else {
//       nums[k++] = sortedRight[j++];
//     }
//   }

//   return nums;
// }

// console.log(mergeSort([1, 2, 0, 0, 5, 6, 7]));


// move zeroes without returning value
var moveZeroes = function(nums) {
  let j=0
    for(let i=0; i<nums.length; i++){
    if(nums[i]===0){
        j++
    }
    else {
         [[nums[i],nums[i-j]]= [nums[i-j],nums[i]]]
         //swapping numbers for instance  if were [0001] that means will be  
          // 1,0 =0,1 then will be 1,0
    }

    }
};
console.log(moveZeroes([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]))