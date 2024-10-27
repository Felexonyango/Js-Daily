var generatepascalTriangle = function (numRows) {
    if(numRows===0){
        return []
    }
    if(numRows===1){
        return [[1]]
    }
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = Array(i + 1).fill(1); 

   
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row); // Add the current row to the result
    }

    return result;
};
console.log(generatepascalTriangle(5))
