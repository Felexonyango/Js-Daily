var isValid = function(s) {
    let stack = [];
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let i = 0; i < s.length;i++){
        if(stack.length !== 0 && map[s[i]] === stack[stack.length - 1]){ // making sure stack is not empty and comparing current element with stack's last element
            stack.pop(); // If we find the same elements remove from stack
        }else{
            stack.push(s[i]); // else add s[i] to stack
        }
    }
    return !stack.length  // at the end return whether stack is empty or not
};