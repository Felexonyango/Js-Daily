function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {  //checks if element matches the key
        return i; 
      }
    }
    return -1; 
  }
  
  const array = [5, 10, 15, 20, 25];
  const target = 15;
  console.log(linearSearch(array, target)); 

//In linear search, we traverse through the array to check if any element matches the key.

//"Write a function that takes an array of strings and a target string as input and
// returns the index of the target string in the array using linear search.
/// If the target string is not found in the array, the function should return -1."

function linearSearchString(array,target){
for(let i=0;i<array.length;i++){
    if(array[i]===target){
        return i;
    }

}
return -1

}
console.log(linearSearchString(['apple', 'banana', 'orange', 'pear'],'banana'))


  
  