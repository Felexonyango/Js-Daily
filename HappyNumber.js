function happyNumber(n) {
let sum =0;
while(n>0){
    let e =n % 10
    n=Math.floor(n/10)
    sum+=e*e
    if (sum === 1) {
        return true;
      }
      else if (sum > 1 && sum <= 4) {
        return false;
}
return happyNumber(sum)
}
}

console.log(happyNumber(19));


function isHappyNumber(number) {
  let current = number;
  let seen = new Set();
  
  while (current !== 1) {
    let sum = 0;
    while (current > 0) {
      sum += Math.pow(current % 10, 2);
      current = Math.floor(current / 10);
    }
    
    if (seen.has(sum)) {
      return false;
    }
    
    seen.add(sum);
    
    current = sum;
  }
  
  return
}