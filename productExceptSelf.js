
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Calculate products to the left of each element and store in the result array
    let leftProduct = 1;
    for (let i = 1; i < n; i++) {
        leftProduct *= nums[i - 1];
        result[i] *= leftProduct;
    }

    // Calculate products to the right of each element and multiply with the result array
    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }

    return result;
};

// Example usage:
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]

