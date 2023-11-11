// function deleteAndEarn(nums) {
//   // Step 1: Count the frequency of each number
//   const freq = new Map();
//   for (const num of nums) {
//     freq.set(num, (freq.get(num) || 0) + 1);
//   }

//   // Step 2: Use dynamic programming to calculate the maximum points
//   let prevMax = 0; // Maximum points for the previous number
//   let currMax = 0; // Maximum points for the current number
//   let prevNum = -1; // Previous number

//   for (const num of freq.keys()) {
//     let maxPoints = Math.max(prevMax, currMax); // Maximum points so far
//     if (num - 1 !== prevNum) {
//       // If the current number is not consecutive to the previous number,
//       // it means we can take all occurrences of it and add to the maximum points
//       currMax = num * freq.get(num) + maxPoints;
//     } else {
//       // If the current number is consecutive to the previous number,
//       // we can either skip this number or take all occurrences of it
//       console.log(freq.get(num), "test");
//       currMax = num * freq.get(num) + prevMax;
//     }

//     prevMax = maxPoints;

//     prevNum = num;
//   }

//   return Math.max(prevMax, currMax); // Return the maximum points
// }
// console.log(deleteAndEarn([3, 4, 2]));

function deleteAndEarns(nums) {
  const map = {};
  for (const num of nums) {
    if (!(num in map)) map[num] = 0;
    map[num]++;
  }
  let prevMax = 0; // Maximum points for the previous number
  let currMax = 0; // Maximum points for the current number
  let prevNum = -1; // Previous number
  for (const num in map) {
    // loop through map object
    const maxPoint = Math.max(prevMax, currMax);

    if (num - 1 !== prevNum) { // If the current number is not consecutive to the previous number,
      currMax = num * map[num] + maxPoint;
    
      // If the current number is not consecutive to the previous number,
    } else {
      currMax = num * map[num] + prevMax;
     
    }

    prevMax = maxPoint;
    prevNum = num;
  }
  return Math.max(prevMax, currMax);
}

console.log(deleteAndEarns([3, 4, 2]));
