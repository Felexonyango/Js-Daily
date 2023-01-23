function findRepeatedDnaSequences(s) {
  let emptyArry = [];
  for (let i = 0; i <= s.length - 10; i++) {
    let substring = s.slice(i, i + 10);
    if (!emptyArry.includes(substring)) {
      emptyArry.push(substring);
    }
  } 
  return emptyArry.filter((substring) =>emptyArry.indexOf(substring) !== emptyArry.lastIndexOf(substring)
  );
}
console.log(findRepeatedDnaSequences("ACGAATTCCG"));

// Hashmap  practise



