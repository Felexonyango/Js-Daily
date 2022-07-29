
function happyNumber(num){

if(num !== 1){

let snum = num.toString();

let result = 0;

for (const sdigit of snum) {

    let digit = Number(sdigit);

    result += digit * digit;

}

console.log(result);

happyNumber(result);

}

return true;

}



console.log(happyNumber(20));

// function happy(n){
//     let sum =0;
//     let num =n;
//     while(num>0){
//         sum +=Math.pow(num%10,2)
//         num =Math.floor(num/10);

//     }
//     if(sum ===1){
//         return true;

//     }
//     else if(sum>1){
//         return happy(sum)
//     }
//     else{
//         return false
//     }
// }
// console.log(happy(19))
 
 