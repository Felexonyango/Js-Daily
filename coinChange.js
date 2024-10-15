

  var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    
    dp[0] = 0;

    for (let coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  };
  
//   var Input = [1, 2, 5];
//   var amount = 11;
//   console.log(coinChange(Input, amount));
  