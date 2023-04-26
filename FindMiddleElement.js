var findMiddleIndex = function (nums) {
 
  for (let i = 0; i < nums.length; i++) {
    let leftNumbers=nums.slice(0,i).reduce((a,b)=>a+b, 0)
    let rightNumbers=nums.slice(i+1).reduce((a,b)=>a+b, 0)
    if(leftNumbers===rightNumbers){
        return i
    }
  }
  return -1
};
console.log(findMiddleIndex([1,2,3,4,5,6]))
