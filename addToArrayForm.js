var addToArrayForm = function(num,k) {
    let  finalResult = []
    const result = num.join('')
  let sum = BigInt(result)+ BigInt(k)
  const data = sum.toString().split('').map(Number);
   finalResult.push(...data);
   return finalResult
    

    

}
console.log(addToArrayForm([2,7,4],[181]))

