function searchStringIndexIn2D(strArr, target) {
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i][j] === target) {
        return [i, j];
      }
    }
  }
}
var strArr = [
  ["hey", "oh"],
  ["scar", "tissue"],
  ["other", "side"],
];
let target = "side";

console.log(searchStringIndexIn2D(strArr, target));

//without binary search leetcode
var searchMatrix = function (matrix, target) {
  let searchedArray = matrix.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < searchedArray.length; i++) {
    for (let j = 0; j < searchedArray[i].length; j++) {
      if (searchedArray[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};
let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let value = 3;
console.log(searchMatrix(matrix, value));

//binary search

function searchMatrixs(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midvalue = matrix[Math.floor(mid/cols)][mid % cols]; 

  //The expression Math.floor(mid/cols) 
  //calculates the row index, and mid % cols calculates the column index.
      if (midvalue === target) {
        return true;
      }
      if (target < midvalue) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
  
  let s = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  let v = 3;
  console.log(searchMatrixs(s, v));
  
