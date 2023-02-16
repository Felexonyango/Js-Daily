// Given two strings ransomNote and magazine, return true if
// ransomNote can be constructed by using the letters from magazine and false
// otherwise.Each letter in magazine can only be used once in ransomNote.



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
