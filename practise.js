function hello(n, nth) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 2) arr.push(i);
    if (i % 2 !=0) arr.push(i);
    console.log(arr);
    arr.shift()
    return arr[nth]
  }
}
console.log(hello(3,5))
