// Given two strings ransomNote and magazine, return true if
// ransomNote can be constructed by using the letters from magazine and false
// otherwise.Each letter in magazine can only be used once in ransomNote.
function stringsConstruction(ransomNote, magazine) {
  let count = {};
  for (let char of magazine) {
    if (char in count) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  for (let char of ransomNote) {
    if (char in count) {
      count[char]--;
      if (count[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
let ransomNote = "a",
  magazine = "b";
console.log(stringsConstruction(ransomNote, magazine));



function stringsConstructions(ransomNote,magazine) {
  let obj1 = {}
   let  obj2 = {};
  for (let i = 0; i <= ransomNote.length - 1; i++) {
   
    if (obj1[ransomNote[i]] === null) {
      obj1[ransomNote[i]] = 1;
    } else {
      obj1[ransomNote[i]]++;
    }
  }

  for (let i = 0; i <= magazine.length - 1; i++) {
    if (obj2[magazine[i]] === null) {
      obj2[magazine[i]] = 1;
    } else {
      obj2[magazine[i]]++;
    }
  }

  return true;
}

console.log(stringsConstruction("aa", "aab"));
