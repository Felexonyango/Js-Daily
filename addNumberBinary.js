function addBinary(a,b) {
    let sum = a + b;
    let binarySum = sum.toString(2);
    
    return binarySum;
  }


  function generateRandomNames(names) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomNames = [];
  

    for (let i = 0; i < names.length; i++) {
        let name = "";
        let namelength=names[i].length
        for(let j=0; j < namelength; j++) {
          const randomIndex = Math.floor(Math.random() * alphabet.length);
          name += alphabet[randomIndex];
        }
        randomNames.push(name);
    
    }
    return randomNames;
  }
  const names = ["cons", "kim", "joseph", "sam"];
  const randomNames = generateRandomNames(names);
  console.log(randomNames);