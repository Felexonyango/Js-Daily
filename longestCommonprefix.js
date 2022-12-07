// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function findlongestPrefix(str){
    for(let i=0;i<str.length; i++){
        let ascending=str.sort((a,b)=>b.length-a.length)
        let shortest =ascending[0]
        while(!str.every((x)=>x.startsWith(shortest))){
            shortest = shortest.slice(0, -1);
        }
        return shortest;
    }



}
console.log( findlongestPrefix(["hello","Hi","heee"]))