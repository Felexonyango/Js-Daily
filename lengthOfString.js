
const checkIfStringIsInAnotherString=(text)=>{
    let arrayofs1 =text.split('')
    for(let i =0; i<arrayofs1.length; i++){
        let word=arrayofs1[i]
        // console.log(word)

        for(let j=1; j<arrayofs1.length; j++){
            
            let secondtext=arrayofs1[j]
            console.log(secondtext)
            if(secondtext.includes(word) && secondtext!==word){
                
            }
        }

    }
}
console.log(checkIfStringIsInAnotherString('hello text'))