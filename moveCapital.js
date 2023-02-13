function moveUpperF(str) {
  const s = str.split(""); //split it into substring
  const Upper = [];  
  const lower = []; 
  for (let i = 0; i < s.length; i++) {
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

