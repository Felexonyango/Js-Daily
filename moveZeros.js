//Given an array of random numbers, push all the zero’s of a given array to the end of the array.
// For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0},
// it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}.

function moveZerostoLast(array){

    for(let i=0; i<array.length; i++){
        if(array[i]===0){
            array.splice(i,1) // from index i remove 1 element
            array.push(0)  //adding zero to the end  arr.push(...items) – adds items to the end,
        }
    
    }
    return array

}

console.log(moveZerostoLast([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]))