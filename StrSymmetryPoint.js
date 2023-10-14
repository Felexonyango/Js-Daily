    function solution(s) {
        if (s.length === 1) return 0; // Special case for a single character.
    
        for (let i = 0; i < s.length; i++) {
        let left = s.slice(0, i); // Substring to the left of the character at index i.
        let right = s.slice(i + 1).split("").reverse().join(""); // Substring to the right reversed.
    
        if (left === right) {
            return i; 
        }
        }
    
        return -1;
    }
  
  console.log(solution("racecar")); // Output: 3
  console.log(solution("x"));       // Output: 0
  console.log(solution("Helldo"));  // Output: -1
  