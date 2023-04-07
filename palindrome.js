var issPalindrome = function (s) {
  if (!s) return null;
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  // for(let i = 0; i < s.length; i++){
  //   rev=s[i]+rev
  // }
  // if(rev===s) return true
  //  return false
  let rev=s.split("").reverse().join("");
  if(rev ===s){
    return true
  }
  else{
    return false
  }
};
console.log(issPalindrome("A man, a plan, a canal: Panama"));

// function palindromeString(str) {
//   var str1 = str.split("").reverse().join("");

//   if (str1 === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromeString("madam"));

// const isPalindrome = (x) => {
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
//     return false;
//   }

//   return x === reverse(x);
// };

// const reverse = (num) => {
//   let rev = 0;

//   while (num != 0) {
//     rev = rev * 10 + num % 10;
//     num = parseInt(num / 10, 10);
//   }

//   return rev;
// };
// console.log(isPalindrome(41));
