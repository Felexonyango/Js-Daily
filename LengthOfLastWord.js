// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 
function lengthOfLastWord(s){
    let word=s.trim().split(/\s+/)
    // trim() method to remove any leading or trailing whitespaces from the input string. 
    // Then it splits the string using
    //  a regular expression that matches one or more whitespace characters /\s+/

    let lastword =word[word.length-1]
    return lastword.length
 
}; 
console.log(lengthOfLastWord('hello yes'))


//Most asked questions

// Two Sum
// Reverse Integer
// Palindrome Number
// Roman to Integer
// Longest Common Prefix
// Valid Parentheses
// Merge Two Sorted Lists
// Remove Duplicates from Sorted Array
// Implement strStr()
// Search in Rotated Sorted Array
