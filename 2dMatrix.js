//acces elements
let mathScore = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];
// accessing elements in 2D matrix
//arrayName[rowIndex][columnIndex]
// console.table(mathScore);
console.log(mathScore[2][2]);
console.log(mathScore[0][0]);

// adding elements in 2D matrix
let numberArr = [
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51],
];
let sum = 0;
numberArr.forEach((row) => {
  row.forEach((element) => {
    sum += element;
  });
});
console.log(sum);

//adding  elemnts into an 2D matrix
numberArr.push([5, 70, 45]);
numberArr.unshift([20, 13, 87]); //adds at the beginning
numberArr.splice(2, 0, [10, 10, 10]);
//remove elements at specified and add new one
numberArr.pop(); //remove last element
numberArr.shift(); //removes first element

console.table(numberArr);
// create 2D array
let arr = [];
let row = 4;
let columns = 3;
let value = 0;

for (let i = 0; i < row; i++) {
  arr[i] = []; //means rows should match columns
  for (let j = 0; j < columns; j++) {
    arr[i][j] = value++;
  }
}

//   let array =[1,2,4]
//   arr[1]=4

console.table(arr);

//search string in 2d matrix

//function to accept
//   function TwoDmatrix(row,columns) {
//     let arr = [];
//     let value = 0;

//   for (let i = 0; i < row; i++) {
//     arr[i] = []; //means rows should match columns
//     for (let j = 0; j < columns; j++) {
//       arr[i][j] = value++;
//     }
//   console.log(arr)
//   }
//   }
//   let row = 4;
//   let columns = 3;
//   const result =TwoDmatrix(row,columns)
//   console.log(result)

