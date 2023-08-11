var calPoints = function(operations) {
    let result = [];
    let sum=0
    let prev = -1;
    let maxPrev = 0;
    let prevprev = 0;
    
    for (let i = 0; i < operations.length; i++) {
        
      let current = operations[i];
      if (current === '+') {
        maxPrev = prev + prevprev;
      } else if (current === 'D') {
        maxPrev = prev * 2;
      } else if (current === 'C') {
        result.pop();
        prev = result[result.length - 1] || 0;
        continue;
      } else {
        maxPrev = parseInt(current);
      }
      
      result.push(maxPrev);
      prevprev = prev;
      prev = maxPrev;

    }
    const data = result.map((item)=>parseInt(item))
    for(let i=0; i<data.length; i++){
        sum += data[i]
    }
    return sum
    
    
   
  };
  
  console.log(calPoints(["5","2","C","D","+"]));
  