//In linear search, we traverse through the array to check if any element matches the key.

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      //checks if element matches the key
      return i;
    }
  }
  return -1;
}

const array = [5, 10, 15, 20, 25];
const target = 15;
console.log(linearSearch(array, target));

//"Write a function that takes an array of strings and a target string as input and
// returns the index of the target string in the array using linear search.
/// If the target string is not found in the array, the function should return -1."

function linearSearchString(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(
  linearSearchString(["apple", "banana", "orange", "pear"], "banana")
);

//array intersection
function arrayIntersection(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (!result.includes(nums1[i])) {
          result.push(nums1[i]); // push matching result into arrray
        }
      }
    }
  }
  return result;
}

console.log(arrayIntersection([1, 2, 2, 1], [2, 2]));
//using hash map

function arrayIntersectionHash(nums1, nums2) {
  const result = [];
  const set = new Set(nums1);
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      if (!result.includes(nums1[i])) {
        result.push(nums2[i]);
      }
    }
  }
  return result;
}
console.log(arrayIntersectionHash([1, 2, 2, 1], [2, 2]));
