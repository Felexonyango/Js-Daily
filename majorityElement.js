function majorityElement(nums) {
  let count = 0;
  let majorityElement = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    } else if (majorityElement === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return majorityElement;
}

console.log(majorityElement([3, 2, 3,6,6,6,9]));

function MajorityElements(nums) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
    
    let majorityElement = 0;
    let majorityCount = 0;
    for (let [key, value] of hashMap.entries()) {
        if (value > majorityCount) {
            majorityCount = value;
            majorityElement = key;
        }
    }
    return majorityElement;
  }
}
console.log(MajorityElements([3, 2, 3]));


//optimum code 
var majorityElement = function (nums) {
    let map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            let prev = map.get(num)
            map.set(num, prev + 1)
        } else {
            map.set(num, 1);
        } if (map.get(num) > nums.length / 2) return num
    }
};
console.log(majorityElement([3, 2, 3]))