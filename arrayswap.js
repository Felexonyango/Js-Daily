const arr = [1, 2, 3];

[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]