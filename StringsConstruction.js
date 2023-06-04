// Given two strings ransomNote and magazine, return true if
// ransomNote can be constructed by using the letters from magazine and false
// otherwise.Each letter in magazine can only be used once in ransomNote.

function stringsConstructions(ransomNote, magazine) {
  const obj1 = countLetters(ransomNote);
  const obj2 = countLetters(magazine);

  for (let letter in obj1) {
    if (!obj2.hasOwnProperty(letter) || obj2[letter] < obj1[letter]) {
      return false;
    }
  }

  return true;
}

function countLetters(str) {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    counts[letter] = (counts[letter] || 0) + 1;
  }

  return counts;
}

// Example usage:
const ransomNote = "aabb";
const magazine = "aabbc";
console.log(stringsConstructions(ransomNote, magazine)); // Output: true
