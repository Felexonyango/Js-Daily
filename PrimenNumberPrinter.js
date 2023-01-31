function primeNumberPrinter(str) {
    var numbers = str.split(/[^0-9]/).map(Number);
    numbers.forEach((num)=>{
        if (isPrime(num)) {
            console.log(num);
          }
    })
   
  }
  
  function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
 