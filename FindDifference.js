function FindDifference(s, t) {
  let arrayT = t.split("").sort() //sorts converts string into sub arrays of strings  as [ 'a', 'b', 'c', 'd', 'e' ]
  let arrayS = s.split("").sort();


  for(let i=0; i<arrayT.length; i++) {
  if(arrayS[i] !==arrayT[i]){
    return  arrayT[i]
  }

  }
}
let s = "abcd"
 let t = "abcde"
console.log(FindDifference(s,t))
