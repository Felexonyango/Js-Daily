// You are given two integer arrays nums1 and nums2, 
//sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, 
//but instead be stored inside the array nums1. To accommodate 
//this, nums1 has a length of m + n, where the first m elements
// denote the elements that should be merged, and the last n elements are set to
// 0 and should be ignored. nums2 has a length of n.

var merge = function(nums1, m, nums2, n) {
    for(let i=m,j=0; j<n ,i<m+n;j++, i++){
           nums1[i]= nums2[j]
       }
   
       return nums1.sort((a,b)=>a-b)
   
   };


   var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
      let second = n - 1;
      let i = m + n - 1;
      while (second > 0) {
        let fval = nums1[first];
        let slval = nums2[second];
        if (fval > sval) {
          nums1[i] = fval;
          i--;
          first--;
        }
        else{
            nums1[i]==sval
            i--
            second --
        }
      } 
    
    
    };