// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]


var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    // Find the leftmost index where target appears
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        // if mid  is greater than target that means target is located in left
        if (nums[mid] >= target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    const startIndex = left
    
    // If target is not found, return [-1, -1]
    if (nums[startIndex] !== target) {
        return [-1, -1]
    }
    
    // Find the rightmost index where target appears
    left = 0
    right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        // if mid is less than target then it means   target value is located at right
        if (nums[mid] <= target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    const endIndex = right
    
    return [startIndex, endIndex]
}
console.log(searchRange([5,7,7,8,8,10],8))