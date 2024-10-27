var maximizeTheProfit = function (n, offers) {
  offers.sort((a, b) => a[1] - b[1]);
  let dp = Array(n + 1).fill(0);

  let offerIndex = 0;
  for (let i = 0; i <= n; i++) {
    if (i > 0) dp[i] = dp[i - 1];
    //Process all offers ending at the current house `i`
    while (offerIndex < offers.length && offers[offerIndex][1] === i - 1) {
      const [start, end, gold] = offers[offerIndex];
      dp[i] = Math.max(dp[i], dp[start] + gold);

      offerIndex++;
    }
  }

  return dp[n];
};
const offers = [
  [0, 2, 3],
  [1, 4, 5],
  [2, 4, 8],
  [3, 4, 6],
];
console.log(maximizeTheProfit(5, offers));
