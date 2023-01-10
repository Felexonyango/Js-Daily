function checkIfAnagram(s1, s2) {
    let a=s1.split('').sort().join()
    let b=s2.split('').sort().join()

    a===b ? console.log('true'): console.log('false')
 
  }
  console.log(checkIfAnagram('test','tes'))








   
  function groupAnagrams(words) {
    const anagrams = {};
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (anagrams[sortedWord]) {
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word];
        }
    }
    return Object.values(anagrams);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

// Create an empty object, anagrams, to store all the anagram groups.
// Loop through the input list of words.
// For each word, sort the characters alphabetically and 
//join them together to form a new string. 
//This new string represents a unique "signature" for all anagrams of that word.
// If a group already exists in the anagrams object for the current
// "signature" with the current word as the first member.
// Return the values of anagrams object using object.values()
