// const obj={}
// obj.name="Next"
// console.log(obj.hasOwnProperty("name"))


// // let user={}
// // let key="test"
// //  user[key]=true
// // const mydummyfun=(users,str2 )=>{
// //     let data={}
// //     for(let user of users){
// //      data[user]
// //     str2.push(data)
// //     }


// // }
// // console.log(mydummyfun())

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // keys
//     //console.log( key ); 
  
//     console.log( user[key] ); 
//   }

 
//   //to get sum
//   let  salary={
//     maize:200,
//     rice:300,
//   }
//   let sum =0
//   for(let key in salary){
//     sum +=salary[key]
  
//   }
//   console.log(sum)

  
const m = new Map()
m.set(1,20)  // sets key and value in order
m.set("apple",23)
m.set(2,40)
//loop
//  for(t of m.values()){
//     console.log(t)
//  }

 //delete key 
 m.delete("apple")
 // clear
 m.clear()
 console.log(m)


  const  myarray = [1,2,3,4,5,6,6,6]
  const myset =new Set(myarray) // used to store unique values by checking at duplicates 


   const uniqueArray =[...myset]  // back to array
   console.log(uniqueArray)
   

   console.log(myset.add(7))


   let hashMap =new Map() //use map to store key-value pair 
   const data =[1,2,3,4,6]
   hashMap['mydata']=data
  console.log(hashMap)


// loop
function myData(data){
  let hashMap =new Map() //to store value- key pair
  for(let i=0;i<data.length;i++){  //array iteration 
    hashMap.set(i,data[i])  
     // add the current index as 
    //the key and the current value as the value to the hashMap object using the set method.

  }

return hashMap.get(5) //you can get single element of an array after iterating them 

}
console.log(myData([1,2,3,4,5,6,7,8,9,10]))