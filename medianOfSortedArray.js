const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

  let length = mergedArray.length;

  if(length%2===1){
    return mergedArray[(length-1)/2];  
  
}
return (mergedArray[length/2-1] + mergedArray[length/2])/2;
};
console.log(findMedianSortedArrays([1, 2], [3, 4]));


//best one 
function findMedianSortedArray(nums1, nums2) {
    const merged = mergeSortedArrays(nums1, nums2);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  }
  
  function mergeSortedArrays(nums1, nums2) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        merged.push(nums1[i]);
        i++;
      } else {
        merged.push(nums2[j]);
        j++;
      }
    }
  
    while (i < nums1.length) {
      merged.push(nums1[i]);
      i++;
    }
  
    while (j < nums2.length) {
      merged.push(nums2[j]);
      j++;
    }
  
        return merged;
  }
  console.log(findMedianSortedArray([1, 2], [3, 4]));
