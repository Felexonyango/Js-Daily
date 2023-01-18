// Given a value of V Rs and an infinite supply of each of the denominations
// {1, 2, 5, 10, 20, 50, 100, 500, 1000} valued coins/notes, 
//The task is to find the minimum number of coins and/or notes needed to make the change?


function DenomoinationChnage(V, denominations) {
    let res = {};  // stores the number of coins  of each denominator
    let i =0;
    while(i<denominations.length){
        let coin = denominations[i];
        res[coin] = Math.floor(V / coin);
        V = V % coin;
        i++
    }
    return res;
}

console.log(DenomoinationChnage(70, [1000, 500, 100, 50, 20, 10, 5, 2, 1]));


// for (let i = 0; i < denominations.length; i++) {
//     let coin = denominations[i];
//     result[coin] = Math.floor(V / coin);
//     V = V % coin;
// }
// return result;