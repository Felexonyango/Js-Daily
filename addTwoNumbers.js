// You are given two non-empty linked lists representing 
//two non-negative integers. The digits are stored in reverse order, and each of 
//their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
function addTwoNumbers(l1, l2) {
  let carry = 0;
  let sumList = new ListNode(0);
  let current = sumList;
  
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  
  return sumList.next;
}
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let sumList = addTwoNumbers(l1, l2);
console.log(sumList); // prints "ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }"
