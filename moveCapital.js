function moveUpperF(str) {
  const s = str.split("");
  const Upper = [];  
  const lower = []; 
  for (var i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      Upper.push(s[i]);
  
    }
    else{
        lower.push(s[i])
    }
   
  }
  
  return Upper.join("").concat(lower.join(""));
}

console.log(moveUpperF("teSt"));

