var commonFactors = function(a, b) {
    if (!a && !b) return null;
    let count =0
    for(let i=0;i<=(a>b ? a:b); i++){ 
        //loop checks between a and b which is greater and gets inclusive values within the range
        if(a % i ===0 && b % i===0){
            count ++
        }
    }
    return count

    // let min =(a>b)? a:b
    // while(true){
    //     if(min % a===0 && min%b===0){
        
    //         break
    //     }
    // }
    // min ++

};