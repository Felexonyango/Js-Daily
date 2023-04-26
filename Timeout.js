
function GetDataAfterTime(array){
 const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if(Array.isArray(array)){
            resolve(array)
        }
        else{
            reject(new Error("Could not resolve"))
        }
    }, 300);
 })
 promise.then((data)=>{
    console.log(data)
 })
 .catch((err)=>{
    console.log(err)
 })
}
let data =[1,2,3,4,5,6,7,8,9,10,11]
console.log(GetDataAfterTime(data))
