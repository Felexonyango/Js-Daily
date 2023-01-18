function checkIfAnagram(s1, s2) {
  let a = s1.split("").sort().join();
  let b = s2.split("").sort().join();

  a === b ? console.log("true") : console.log("false");
}
console.log(checkIfAnagram("test", "tes"));



function GroupAnagram(words) {
    const anagrams = {};
    for (let i = 0; i < words.length; i++) {
      const sortedWord = words[i].split('').sort().join('');
      if (anagrams[sortedWord]) {
          anagrams[sortedWord].push(words[i])
      }
      else{
          anagrams[sortedWord] = [words[i]]
      }
    }
    return Object.values(anagrams);
  }
  console.log(GroupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
  


function GroupAnagrams(words) {
  const anagrams = {}; // to store all the anagram groups
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    anagrams[sortedWord]
      ? anagrams[sortedWord].push(word)
      : (anagrams[sortedWord] = [word]);
  }
  return Object.values(anagrams)
}
console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

