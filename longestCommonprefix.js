
function findlongestPrefixs(str) {
  for (let i = 0; i < str.length; i++) {
    let ascending = str.sort((a, b) => b.length - a.length);
    let shortest = ascending[0];
    while (!str.every((x) => x.startsWith(shortest))) {
      shortest= shortest.slice(0, -1);
    }
    return  shortest
  }
}
console.log(findlongestPrefixs(["flower", "flow", "flight"]));
