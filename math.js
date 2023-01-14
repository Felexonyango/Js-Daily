function power(x,n){
    let res=1
    for(let i=0; i<n; i++){
        res*=x
    }
    return res
}
console.log(power(2,3))

let company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  function GetSum(department){
    if(Array.isArray(department)){
        return department.reduce((prev,acc)=>prev +acc,0)
    }
    else{
        let sum =0;
        for(let x of Object.values(department)){
            sum += GetSum(x); 
        }
        return sum
    }
  }
  console.log(GetSum(company))