// Binary search is a search algorithm that finds the position of 
// a target value within a sorted array. It works by repeatedly dividing
//  in half the portion of the array that could contain the target value until the value
//  is found or the remaining portion of the array is empty.

//example  array = [5, 10, 15, 20, 25]; 
function Binarysearch(array,target){
    const left =0;  //first element
    const right =array.length-1  //last element

    while(left<=right){
        const mid =Math.floor((left+right)/2)
        const value = array[mid]

        if(value ===target){
            return mid
        }
        else if(value<target){
            return left=mid+1
        }
        else{
            return right=mid-1
        }
    }
    return -1

}   

const array = [5, 10, 15, 20, 25];
  const target = 15;
  console.log(Binarysearch(array,target))