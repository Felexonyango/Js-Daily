// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

function sortPeople(arryofNames, arrayofheights) {
  let people = []
  for (let i = 0; i < arryofNames.length; i++) {
    people.push({name: arryofNames[i], height: arrayofheights[i]});
  }
  people.sort((a, b) => b.height - a.height);
  let sortedNames = people.map(person => person.name);
  return sortedNames;
}
console.log(sortPeople(["Mary", "John", "Emma"], [1, 2, 3]));