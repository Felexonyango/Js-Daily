var coinChange = function (coins, amount) {
    let minCoins = [0];
  
    for (let i = 1; i <= amount; i++) {
      minCoins.push(Math.min.apply( null,coins.filter((coin) => coin <= i)
      
      .map((coin) => minCoins[i - coin] + 1)));
    //   used to return the lowest-valued number passed in the method
    }
  
    return minCoins[amount] === Infinity ? -1 : minCoins[amount];
  };
  
  var Input = [1, 2, 5];
  var amount = 11;
  console.log(coinChange(Input, amount));
  

//   var coinChange = function (coins, amount) {
//     let dp = new Array(amount + 1).fill(Infinity);
//     dp[0] = 0;
  
//     for (let coin of coins) {
//       for (let i = coin; i <= amount; i++) {
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//       }
//     }
  
//     return dp[amount] === Infinity ? -1 : dp[amount];
//   };
  
//   var Input = [1, 2, 5];
//   var amount = 11;
//   console.log(coinChange(Input, amount));
  