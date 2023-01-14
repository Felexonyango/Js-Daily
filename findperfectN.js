function findPerfect(n){
    let arr = [];
    let sum = 0;
    for (let index = 1; index <= n/2; index++) {
        if(n % index === 0){
            arr.push(index)
            sum += index;
        }
    }
    if(sum !== n){
        let result = (sum - n)/2;
        if(arr.includes(result)){
            return result;
        }
        else return console.log('Neither')
    }
    else return  console.log('Perfect')
}
console.log(findPerfect(6))