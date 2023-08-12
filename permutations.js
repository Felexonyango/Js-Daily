
var permute = function(nums) {
    let res = []

    

    let iterate = (arr,temp) =>{
           if(arr.length == 0){
            res.push(temp)
            return;
        }
        for(let i =0;i<arr.length;i++){
            //filter postion used 
            //123  213 etc
            iterate(arr.filter((num,idx)=>idx !=i),[...temp,arr[i]])
        }
    }
    iterate(nums,[])
    return res
};
console.log(permute([1,2,3]))

// option 2

const backtrack = (nums, currentPermutation, used, result) => {
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }
    
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        currentPermutation.push(nums[i]);
        used[i] = true;
        
        backtrack(nums, currentPermutation, used, result);
        
        currentPermutation.pop();
        used[i] = false;
      }
    }
  };
  
  function permute(nums) {
    const result = [];
    backtrack(nums, [], new Array(nums.length).fill(false), result);
    return result;
  }
  
  // Example usage
  console.log(permute([1, 2, 3]));
  