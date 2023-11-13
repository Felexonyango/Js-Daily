var reverseVowels = function (s) {
    const vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let vowelArray = [];
  
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        vowelArray.push(s[i]);
      }
    }
    vowelArray.reverse();
  
    let reversed = "";
    let vowelIndex = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        reversed += vowelArray[vowelIndex];
        vowelIndex++;
      } else {
        reversed += s[i];
      }
    }
  
    return reversed;
  };

//Example 2
const reverseVowels = (s) => {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    // Array.from('foo');
// [ "f", "o", "o" ]
    const vowelArray = Array.from(s).filter((char) => vowels.has(char)); //a from converts into array of strings
    vowelArray.reverse();
  
    return Array.from(s).reduce((acc, char) => {
      if (vowels.has(char)) {
        acc += vowelArray.pop();
      } else {
        acc += char;
      }
      return acc;
    }, "");
  };
  
  console.log(reverseVowels("hello"));
  


