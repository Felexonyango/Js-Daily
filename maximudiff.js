function maximumdiff(arrayInterger) {
  let maximum=-Infinity
  let minimum =Infinity
  let diff = 0;
  for (let i = 0; i < arrayInterger.length; i++) {
    if (arrayInterger[i] > maximum) {
        maximum = arrayInterger[i];
    }
    if (arrayInterger[i] < minimum) {
        minimum = arrayInterger[i];
    }
    diff=maximum-minimum;
  }
  return diff
}
console.log(maximumdiff([3, 7, 1, 9, 4, 5, 8]))
