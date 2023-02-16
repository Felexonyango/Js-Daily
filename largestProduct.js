function largestproduct(nums) {
  if (nums.length < 3) {
    return null;
  }
  const sortednumber = nums.sort((a, b) => a - b);

  const getlargestproduct =
    sortednumber[sortednumber.length - 1] *
    sortednumber[sortednumber.length - 2] *
    sortednumber[sortednumber.length - 3];

  const getproductof =
    sortednumber[0] * sortednumber[1] * sortednumber[sortednumber.length - 1];

  return Math.max(getlargestproduct, getproductof);
}
console.log(largestproduct([5, -10, 7, 8, 1]));

