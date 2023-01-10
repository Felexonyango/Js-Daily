

function fun(string, n) {
  let result = '';
  for(let i =n; i>= 0; i--) {
    result += string.substring(0, i) + '\n';
  }
  return result;
}

console.log(fun("Vayolence", 3));


// function test (text, num){
//      var res = ""; 
//      for(var i=0; i < num; i++) { 
//         res += text.substring(0,(num-i)) + '\n'
//     }
    
//     return res;
    
// }
// console.log(test('hello',3))