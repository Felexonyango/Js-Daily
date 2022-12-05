function palindromeString(str) {
  var str1 = str.split("").reverse().join("");

  if (str1 === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeString("madam"));

function palindromeNumber(num){
     const reverseNum = num.toString().split("").reverse().join("")
     return num === reverseNum

}

console.log(palindromeNumber(31));