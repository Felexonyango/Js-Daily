// function ShortestRotationDinner(A, B) {
//     if (A.length !== B.length) {
//       return -1; 
//     }
  
//     let minimumCount = A.length; 
  
//     for (let rotation = 0; rotation < A.length; rotation++) {
//       let count = 0;
//       let b = [B[B.length - 1]];
  
//       for (let i = 0; i < B.length - 1; i++) {
//         b.push(B[i]);
//         const currentValue = b[i];
    
  
//         for (let j = 0; j < A.length; j++) {
//           let currentValueInDish = A[j];
//           if (currentValueInDish === currentValue) {
//             count++;
//           }
//         }
//       }
//       if (count < minimumCount) {
//         minimumCount = count;
//       }
//     }
  
//     return minimumCount;
//   }
  
//   let A1 = [1, 3, 5, 2, 8, 7];
//   let B1 = [7, 1, 9, 8, 5, 7];
//   console.log(ShortestRotationDinner(A1, B1)); // Output should be 2
  
 
function solution(A, B) {
    if (A.length !== B.length) {
      return -1; // Return a special value to indicate an error
    }
  
    const n = A.length;
  
    for (let i = 0; i < n; i++) {
      let isSatisfied = true;
  
      for (let j = 0; j < n; j++) {
        if (A[j] === B[(j + i) % n]) {
          isSatisfied = false;
          break;
        }
      }
  
      if (isSatisfied) {
        return i-1;
      }
    }
  
    return -1; // If no rotations satisfy everyone
  }
  
  console.log(solution([1, 3, 5, 2, 8, 7], [7, 1, 9, 8, 5, 7])); // Output should be 2
  