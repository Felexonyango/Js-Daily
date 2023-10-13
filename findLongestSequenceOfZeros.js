function findLongestSequenceOfZeros(n) {
    const binaryString = n.toString(2);
  
    let count = 0;
    let maxCount = 0;
  
    for (let i = 0; i < binaryString.length; i++) {
      const currentChar = binaryString[i];
  
      if (currentChar === "0") {
        count++;
      } else if (currentChar === "1") {
        maxCount = Math.max(maxCount, count);
        count = 0;
      }
    }
  
    return maxCount;
  }
  
  console.log(findLongestSequenceOfZeros(9)); 
  