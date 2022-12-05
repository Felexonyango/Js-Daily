function reverseNum(num){
    const reversedNum = num.toString().split("").reverse().join("");
    return Math.sign(num)*parseInt(reversedNum)
}
console.log(reverseNum(-1432))


var reverse = function(x) {
    let rev = 0;
   let rem;
   let isNegative = x < 0;
   
   if (isNegative)
       x = (-1) * x;

   while(x != 0 ) {
     rem = x % 10;
     x = parseInt(x / 10); 
     rev = parseInt(rev + '' + rem);
   }
   
   if (rev > 0x7FFFFFFF)
       return 0;
   
   if (isNegative)
       return (-1) * rev;
   
   return rev;
}