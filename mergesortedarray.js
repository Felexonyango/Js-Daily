// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function mergesorted(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  //concanating
  let i = m + n - 1;
  while (second > 0) {
    let fval = nums1[first];
    let sval = nums2[second];
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
}
console.log(mergesorted([2, 4, 8, 9], 4, [0, 4, 6, 9], 4));
