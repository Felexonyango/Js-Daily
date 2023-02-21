const isPowerThree = (n) => {
    for(let i=3; i<=n; i*=3){
        if (i === n) 
        return true 
    }
    return false
  }
  console.log(isPowerThree(27))