
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {   //iterates through array from last to first element
    
        var j = Math.floor(Math.random() * (i + 1)); ///generates random index
                 
        //Then, it swaps the current element (array[i]) with the element at the random index (array[j])
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

 console.log(shuffleArray([4,8,9,7,4]))