var addDigits = function(num) {
    if (num < 10) {
        return num; 
    }
    
    let sum =0;

     const data=  num.toString().split('').map(Number)
    for(let i=0; i<data.length; i++){
         const resultObj= data[i]
         console.log(resultObj,'result')
         sum += resultObj
       
    }
    return  addDigits(sum);
    

};
console.log(addDigits(38))