const obj={}
obj.name="Next"
console.log(obj.hasOwnProperty("name"))


// let user={}
// let key="test"
//  user[key]=true
// const mydummyfun=(users,str2 )=>{
//     let data={}
//     for(let user of users){
//      data[user]
//     str2.push(data)
//     }


// }
// console.log(mydummyfun())

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    //console.log( key ); 
  
    console.log( user[key] ); 
  }


  //to get sum
  let  salary={
    maize:200,
    rice:300,
  }
  let sum =0
  for(let key in salary){
    sum +=salary[key]
  }
  console.log(sum)