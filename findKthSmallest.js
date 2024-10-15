var findKthSmallest = function (coins, k) {
    let possibleAmounts = new Set();
    for (let coin of coins) {
      for (let i = 1; i <= k; i++) {
        possibleAmounts.add(coin * i);
      }
    }
  
   
    let sortedAmounts = Array.from(possibleAmounts).sort((a, b) => a - b);
  
    
    return sortedAmounts[k - 1];
  };
  
  
  let coins = [5,2]
  let k = 7
  
  console.log(findKthSmallest(coins, k));
  
  