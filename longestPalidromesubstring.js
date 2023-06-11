function longestPalindrome1(s){
    if (!s) return null;
    let longest = '';
  
    const expandFromCenter = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return s.substring(left + 1, right);
    };
  
    for (let i = 0; i < s.length; i++) {
      const oddPalindrome = expandFromCenter(i, i);
      const evenPalindrome = expandFromCenter(i, i + 1);
  
      if (oddPalindrome.length > longest.length) {
        longest = oddPalindrome;
      }
  
      if (evenPalindrome.length > longest.length) {
        longest = evenPalindrome;
      }
    }
  
    return longest;
  };
  function longestPalindrome(s) {
    if (!s) return null;
    
    let longest = '';
    
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        const substring = s.substring(i, j + 1);
        
        if (isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
        }
      }
    }
    
    return longest;
  };
  
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  console.log(longestPalindrome('babad'))