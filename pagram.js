
//A pangram is a sentence that contains every single letter of the alphabet at least once.


function isPangram(string){
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) { 
    if(strArr.indexOf(alphabet[i]) < 0){    //example var colors=["red","green","blue"];var pos=colors.indexOf("blue");//2
      
      return false;
    }
  }
  return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));

 
