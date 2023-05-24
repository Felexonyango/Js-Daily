
function maximizeProfit(prices) {
 let minPrice = prices[0]
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];
      if ( currentPrice< minPrice) {
        minPrice = currentPrice
      } else if (currentPrice - minPrice > maxProfit) {
        maxProfit =currentPrice - minPrice;
      }
    }
  
    return maxProfit;
  }

  
