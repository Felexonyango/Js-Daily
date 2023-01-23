function findRepeatedDnaSequences(s) {
  let emptyObject = {};
  let result = [];
  for (let i = 0; i <= s.length - 10; i++) {
      let substring = s.substring(i, i + 10);
      if (emptyObject[substring]) {
        if(emptyObject[substring]===1){
          result.push(substring);

        }
        emptyObject[substring] += 1;
      }
      else {
          emptyObject[substring] = 1;
      }
  }
  return result;
}
console.log(findRepeatedDnaSequences("ACGACGACGACGACGACGACG"));

function findRepeatedDnaSequencess(s) {
  let map = new Map();
  let result = [];
  for (let i = 0; i <= s.length - 10; i++) {
      let substring = s.substring(i, i + 10);
      if (map.has(substring)) {
          if(map.get(substring) === 1){
              result.push(substring);
          }
          map.set(substring, map.get(substring) + 1);
      } else {
          map.set(substring, 1);
      }
  }
  return result;
  
}
console.log(findRepeatedDnaSequencess("ACGACGACGACGACGACGACG"));
