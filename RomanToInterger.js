var romanToInt = function (s) {
  let values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let output = 0;
  for (let i = 0; i < s.length; i++) { 
    //     To detect whether the current character is a subtractive numeral,
    //      the code checks if the value of the current character (values[s[i]]) is
    //      less than the value of the next character (values[s[i+1]]).
    //      If this is true, it means that the current character is a subtractive numeral.
    if (values[s[i]] < values[s[i + 1]]) {
      // If the current character is a subtractive numeral,
      //  the code subtracts its value from the output variable by using the
      output -= values[s[i]];
    } else {
      output += values[s[i]];
    }
  }
  return output;
};
console.log(romanToInt("VII"));
