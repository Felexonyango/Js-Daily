// var maxArea = function (height) {
//     let maxArea = 0;
//     let left = 0;
//     let right = height.length - 1;
  
//     while (left < right) {
//       const minHeight = Math.min(height[left], height[right]);
//       const width = right - left;
//       const currentArea = minHeight * width;
  
//       maxArea = Math.max(maxArea, currentArea);
  
//       if (height[left] < height[right]) {
//         left++;
//       } else {
//         right--;
//       }
//     }
  
//     return maxArea;
//   };
  var maxArea = function (height) {
    let area = 0;
    for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
        const firstValue = height[i];
        const lastValue = height[j];
        const result = Math.min(firstValue, lastValue);
        const distance = j - i;
        area = Math.max(area, result * distance);
      }
    }
    return area;
  };
  console.log(maxArea([1,8,6,2,5,4,8,3,7]))