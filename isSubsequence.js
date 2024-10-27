// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// var isSubsequence = function(s, t) {
//     let dp =new Array(s.length+1)
//     .fill(false)

//     for(let i=1; i<=s.length; i++) {
//         for(let j=1; j<=t.length; j++) {

//             if(s[i]===t[j]){
//                 dp[i] = dp[i-1] + dp[i]
//             }
//             else{
//                 dp[i] = dp[i-1]
//             }
//         }
//     }
//     return dp[s.length] === t.length

// };
// let s = "abc"
// let t = "ahbgdc"
// console.log(isSubsequence(s, t))
var isSubsequence = function (s, t) {
  let dp = Array(s.length + 1)
    .fill(0)
    .map(() => Array(t.length + 1).fill(false));

  // An empty string is always a subsequence of any string
  for (let j = 0; j <= t.length; j++) {
    dp[0][j] = true;
  }

  // Fill the dp table
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        // If characters match, carry over the result from the previous character
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[s.length][t.length];
};
let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));
