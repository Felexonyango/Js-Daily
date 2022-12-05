function palindromeString(str) {
  var str1 = str.split("").reverse().join("");

  if (str1 === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeString("madam"));

const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  
  return x === reverse(x);
};

const reverse = (num) => {
  let rev = 0;
  
  while (num != 0) {
    rev = rev * 10 + num % 10;
    num = parseInt(num / 10, 10);
  }
  
  return rev;
};
console.log(isPalindrome(41));




