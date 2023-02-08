function generateParenthesis(n) {
    let result = [];
  
    function generate(current, left, right) {
      if (current.length === 2 * n) {
        result.push(current);
        return;
      }
  
      if (left < n) {
        generate(current + '(', left + 1, right);
      }
  
      if (right < left) {
        generate(current + ')', left, right + 1);
      }
    }
  
    generate('', 0, 0);
    return result;
  }
  console.log(generateParenthesis(3))





  function Parenthesis(n) {
    let result = [];
    let stack = [];

    stack.push({current: '', left: 0, right: 0});
  
    while (stack.length > 0) {
        let getstack= stack.pop();
        let current = getstack.current;
        let left = getstack.left;
        let right = getstack.right;
    //  let {current,left,right}=stack.pop()
      if (current.length === 2 * n) {
        result.push(current);
      } else {
        if (left < n) {
          stack.push({current: current + '(', left: left + 1, right: right});
        }
        if (right < left) {
          stack.push({current: current + ')', left: left, right: right + 1});
        }
      }
    }
  
    return result;
  }
  console.log(Parenthesis(3))