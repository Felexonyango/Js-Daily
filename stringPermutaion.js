function rearrangeString(str) {
  const result = [];
  const backtrack = (str, current) => {
    if (current.length === str.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (current.includes(str[i])) {
        continue;
      } else {
        current.push(str[i]);
        backtrack(str, current);
        current.pop();
      }
    }
  };
  backtrack(str, []);
  return result;
}
console.log(rearrangeString(["h", "e", "l"]));
//   Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

var checkInclusion = function(s1, s2) {
    for (let i = 0; i < s2.length; i++) {
        const window = s2.substr(i, s1.length); //take all substring of str1 that exist in str2
        if (isPermutation(window, s1)) {
            return true;
        }
    }
    return false;
};

function isPermutation(s1, s2) {
    const count = {};
    for (let i = 0; i < s1.length; i++) {
        count[s1[i]] = (count[s1[i]] || 0) + 1;
    }
    for (let i = 0; i < s2.length; i++) {
        const c = s2[i];
        if (!count[c]) {
            return false;
        }
        count[c]--;
    }
    return true;
}

console.log(checkInclusion("ab", "eidbaooo"));


    function permutation( str, result) {
      if(str.length==0){
        console.log(result)
      }
      for(let i=0; i<str.length; i++){
        let res =str.substr(0,i)+str.substr(i+1)
        permutation(res,result+str[i])
      }

    }
    console.log(permutation('let',''))