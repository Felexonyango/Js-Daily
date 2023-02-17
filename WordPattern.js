var wordPattern = function(pattern, s) {
    const arrayPattern = pattern.split("");
    const arrayS = s.split(" ");
    if (arrayPattern.length !== arrayS.length) {
      return false;
    }
    const map = new Map();
    for (let i = 0; i < arrayPattern.length; i++) {
      const char = arrayPattern[i];
      const word = arrayS[i];
      if (map.has(char)) {
        if (map.get(char) !== word) {
          return false;
        }
      } else {
        if (Array.from(map.values()).includes(word)) {
          return false;
        }
        map.set(char, word);
      }
    }
    return true;
  };
  
  const pattern = "abba";
  const s = "dog cat cat dog";
  console.log(wordPattern(pattern, s)); // Output: true
  

  //using object

const wordPatternObject = (pattern, s)=> {
    const arrayPattern = pattern.split("");
    const arrayS = s.split(" ");
    if (arrayPattern.length !== arrayS.length) {
      return false;
    }
    const result ={}

    for (let i = 0; i < arrayPattern.length; i++) {
      const char = arrayPattern[i];
      const word = arrayS[i];
      if (result[char]) {
        if (result[char] !== word) {
          return false;
        }
      } else {
        if(Object.values(result).includes(word))
        
          return false;
        }
        map.set(char, word);
      }
      return true;
    }
  
  const patterns = "abba";
  const ss = "dog cat cat dog";
  console.log(wordPattern(patterns, ss))
  