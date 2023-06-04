const checkIfStringIsInAnotherString = (text, text2) => {
  const characters = text2.split("");
    const words = text.split('')

    for (let i = 0; i < characters.length - text.length + 1; i++) {
     
      for (let j = 0; j < words.length; j++) {
        const word = words[j];
        const substring = characters.slice(i, i + word.length).join("");
  
        if (word.includes(substring)) {
          return true;
        }
      }
    }
  
    return false;
  };
  
  console.log(checkIfStringIsInAnotherString("hello", "helloworld")); // true
  // console.log(checkIfStringIsInAnotherString("foo", "bar baz")); // false
  