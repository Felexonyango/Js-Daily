function SearchTargetValue(array,target){
let index =array.indexOf(target)
if(index !==-1){
    return index
}

 let left = 0;
 let right = array.length - 1;
 while (left <= right) {
   let mid = Math.floor((left + right) / 2);
  
   
   if (array[mid] < target) {
     left = mid + 1;
   } else {
     right = mid - 1;
   }
 }
 return left;

}
const array = [1, 3, 5, 7, 9];
const target = 6;
console.log( SearchTargetValue(array, target))