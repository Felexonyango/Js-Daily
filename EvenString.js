const words = ["mary", "adama"];
const findEvenString = (words) => {
  if (words.length % 2 == 0) {
    return words;
  }
};

const result = words.filter(findEvenString);
console.log(result);


//best approach
function findEvenStrings(words) {
  if (!words) return null;
  let results=[]
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 == 0) {
      results.push(words[i])
    
    }
  }
  return results
  
}

console.log(findEvenStrings(words));
