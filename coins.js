// Given a value of V Rs and an infinite supply of each of the denominations
// {1, 2, 5, 10, 20, 50, 100, 500, 1000} valued coins/notes, 
//The task is to find the minimum number of coins and/or notes needed to make the change?



const denominationsChange =(amount,denominations) => {
    let result = {};
    for (let coin of denominations){
        let coinCount = Math.floor(amount/coin)
        if(coinCount>0){
            result[coin] = coinCount
        }
     amount-= coinCount*coin
  
    }
    return result;
}
console.log(denominationsChange(70, [1000, 500, 100, 50, 20, 10, 5, 2, 1]));