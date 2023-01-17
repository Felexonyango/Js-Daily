function makeChange(V, denominations) {
    let result = {};  // stores the number of coins  of each denominator
    let i =0;
    while(i<denominations.length){
        let coin = denominations[i];
        result[coin] = Math.floor(V / coin);
        V = V % coin;
        i++
    }
    return result;
    // for (let i = 0; i < denominations.length; i++) {
    //     let coin = denominations[i];
    //     result[coin] = Math.floor(V / coin);
    //     V = V % coin;
    // }
    // return result;
}

let V = 470;
let denominations = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
console.log(makeChange(V, denominations));