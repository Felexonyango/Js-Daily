

function  collatz(number){
    number = number ? number : document.getElementById("Input").value;
    console.log(number)

    let result =number;

  if(number %2 ===0){
    result = number/2; 
}
else{
    result = (number*3)+1; 
}

 if(result !==1){
    collatz(result);
 }
 else {
     console.log(result)
 }
} 
 
