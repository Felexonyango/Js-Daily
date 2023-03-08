function moveArraysLeft(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            arr.splice(i,1)  
            arr.unshift(0)
        }
    }
    return arr
}
console.log(moveArraysLeft([1,2,0,0,5,6,7]))