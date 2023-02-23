//  Given a string s, find the length of the longest
// substring
// without repeating characters.


var lengthOfLongestSubstring = function (s) {
  let count = 0;
  const substring = s.split(""); //split into substring

  for (let i = 0; i < substring.length; i++) { ///travese through length of substring
    let word = substring[i];
    for (let j = i + 1; j < substring.length; j++) {//The if statement checks if the character at
        // index j is already present in the word substring using the indexOf method. 
        //If it is, then this means the substring word now contains a repeating character,
        // and the break statement 
        //is executed, which breaks out of the inner loop and returns to the outer loop.
      if (word.indexOf(s[j]) !== -1) break; //

      else word += s[j];
    }
    count = Math.max(word.length, count); //return largest number of word with count
  }
  return count;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
