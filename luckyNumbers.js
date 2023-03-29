      // Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
// A lucky number is an element of the matrix such that it is the minimum element 
// in its row and maximum in its column.
var luckyNumbers  = function(matrix) {
    let result =[];
    for(let i=0; i<matrix.length; i++) {
      const row  =matrix[i]
      const min=Math.min(...row) //returning all small set in an array
      console.log(min,'min')
      const collIndex =row.indexOf(min) //returns index of first occurrence of min Number in a row
      console.log(collIndex,"test")
      let isMax=true
      for(let j=0;j<matrix.length;j++){
        console.log(matrix[j][collIndex],'hhh')
        console.log(collIndex,'he')
        if(matrix[j][collIndex]>min){ 
          //get all elements in array multiply by index of min then check if result is greater than min
          //if so then its not max
            isMax=false
            break
        }
      }
      if(isMax){
        result.push(min)

      }

      
    }
    return result
}

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))                                          