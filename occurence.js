function firstOccurence(array,k) {
    for(let i=0;i<array.length;i++){
        if(array[i]===k){
            return i
        }
    }
    return -1

    
}
let arr = [1, 3, 5, 7, 5, 3, 1];
let k = 5;
console.log(firstOccurence(arr, k));
//using binary search

function findfirstOccurence(array,k){
    let left =0;
    let right =array.length -1
    let result =-1 // stores first occurence 
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(array[mid]===k){
            result=mid
            right=mid-1

        }
        else if(array[mid]<k){
            left =mid+1
        }
        else{
            right=mid-1
        }
    }
 return result
}
let ar = [1, 3, 5, 7, 5, 3, 1];
let t = 5;
console.log(findfirstOccurence(ar, t));