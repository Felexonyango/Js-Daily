
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }
 const arrayData=[4,8,9,7,4]
 const array1 =shuffleArray(arrayData)
 console.log(array1)