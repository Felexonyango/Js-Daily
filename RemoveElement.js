// Given an integer array nums and an integer val, remove all occurrences of
//  val in nums in-place. The relative order of the elements may be changed.
function removeElement( num,val){ 
for(let i=0; i < num; i++){
    if(num[i] === val){
        num.splice(i,1);
                i--;
    }
}

}