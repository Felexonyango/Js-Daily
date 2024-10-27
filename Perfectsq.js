function perfectsq(num) {
  if (num < 0) {
    return false;
  }
  if (Number.isInteger(Math.sqrt(num))) {
    return true;
  } else {
    return false;
  }
}
console.log(perfectsq(16));
function Isperfect(num) { 
  // return Math.sqrt(num) % 1 === 0 ? true : false;
    if(num<0){
        return false
    }
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}
console.log(Isperfect(5));
