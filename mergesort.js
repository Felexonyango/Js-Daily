function mergesort(nums) {
  if(nums.length<=1)return nums

  let mid =Math.floor(nums.length/2)
  let left =nums.slice(0,mid)
  let right =nums.slice(mid)

return merge(mergesort(left),mergesort(right))

};

function merge(left,right){
let result =[]
while(left.length && right.length){
   if(left[0]<right[0]){
       result.push(left.shift())
   }
   else{
       result.push(right.shift())
   }
}
return result.concat(left,right)


};

//bubble sorting 

const sortArray=(nums)=> {
for (let i = 0; i < nums.length - 1; i++) { //sorts in ascending order
     for(let j =i+1; j < nums.length; j++) {
  
      if(nums[i]> nums[j]) {
        [nums[i], nums[j]] =[nums[j],nums[i]]
      }
     }
    }
    return nums

  }
  console.log(sortArray([50, 23, 90, 40, 10, 5, 45, 21, 100, 1, 58, 90, 32]))