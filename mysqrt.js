var mySqrt = function(x) {
let  res = 1;
    if(x === 0){
        res = 0;
    } else {
    for (let i = 1; i< x;i++){
        if(i*i === x){
            res = i;
            break;
        }
        if(i*i >x){
            res = i - 1;
            break;
        }
    }
    }
    return res;
    };
console.log( mySqrt(5))