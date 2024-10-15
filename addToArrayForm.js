var addToArrayForm = function(num,k) {
    let  finalResult = []
    const result = num.join('')
console.log(result,'d')

  let sum = BigInt(result)+ BigInt(k)
  console.log(sum,'ddd')
  const data = sum.toString().split('').map(Number);
   finalResult.push(...data);
   return finalResult

    

    

}
console.log(addToArrayForm([2,7,4],[181]))

