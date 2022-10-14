

 function palindrome(str){
 var str1=str.split("").reverse().join("");
 
 if(str1===str){
    return true
 }
else{
    return false
}

    }

    console.log(palindrome("madam"))
 