

function fun(string, n) {
  let result = '';
  for(let i =n; i>= 0; i--) {
    result += string.substring(0, i) + '\n';
  }
  return result;
}

console.log(fun("Vayolence", 3));


