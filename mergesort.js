function merge(right,left){
    let arr=[]
    while(left.length && right.length){
        if(left[0]< right[0]){
            arr.push(left.shift())
        } else{
            arr.push(right.unshift())
        }
        
    }
    return [...arr, ...left,...right]
   

}

function mergesort(array){
    let half =array.length/2
    if(array.length<2){
        return array
    }
    const left =array.splice(0,half)
    return merge(
        mergesort(merge(left),
        mergesort(array))
    )
  

}
const arry =[50,23,90,40,10,5,45,21,100,1,58,90,32]
console.log(mergesort(arry))