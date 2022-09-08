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
        let excess = (sum - n)/2;
        if(arr.includes(excess)){
            return excess;
        }
        else return 'Neither'
    }
    else return 'Perfect'
}
console.log(findPerfect(60))