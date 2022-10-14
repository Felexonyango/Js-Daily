const words = ["mary", "adama"];
const findEvenString = (words) => {
  if (words.length % 2 == 0) {
    return words;
  }
};

const result = words.filter(findEvenString);
console.log(result);
