class Node {
  //node we have data, and next for reference to next act as pointer property
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// const n1 = new Node(200);
// console.log(n1);
class LinkedList {
  constructor() {
    this._head = null;
    this.size = 0;
  }

  insert(data) {
    const newNode = new Node(data); //creates a new node .
    if (!this._head) {
      this._head = newNode; //check if linked list is empty, if  empty insert node .
    } else {
      //if not empty, traverse the node and insert the last node

      let current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  }

  addFirst(data) {
    let newNode = new Node(data);
    if (!this._head) {
      this._head = newNode;
    } else {
      let current = this._head;
      newNode = current;
      this._head = newNode;
    }
    this.size++;
  }

  delete(data) {
    let previousNode;
    if (!this._head) {
      //if there is no head ,return null
      return null;
    }
    if (this._head.data === data) {
      //checks if head contains data to be deleted, if yes
      //it sets to the next  node ,removing it
      this._head = this._head.next;
      return;
    }
    let current = this._head;
    while (current.data !== data) {
      //if current Node does not contain data  thats  needed  ,set previous node equal to current
      previousNode = current;
      current = current.next;

      previousNode.next = current.next;
    }
    this.size--;
  }

  removeduplicate() {
    let current = this._head;
    while (current && current.next) {
      if (current.data === current.next.data) {
        // compares current node and next current node
        current.next = current.next.next; // removes duplicates if  curent node is equal to the next current node
        this.size--; //We also decrement the size of the linked list since we are removing a node.
      } else {
        current = current.next;
      }
    }
    return this._head;
  }

  getAt(index) {
    let current = this._head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data, "heelo");
      }
      current++;
      current = current.next;
    }
  }
  clear() {
    this._head = null;
  }
  getMiddleNode() {
    //using fast and slow  pointer

    let fast = this._head;
    let slow = this._head;
    if (this._head != null) {
      while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      console.log(slow.data);
      return slow.data;
    }
  }
  getLastNode() {
    let lastNode = this._head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
        console.log(lastNode.next);
      }
    }
    return lastNode;
  }

  oddEvenList() {
    if (!this._head) return null;
    let even = this._head.next // 1,2,3,4,5,6 so even are 2,4,6 
    let odd = this._head;
    let evenHead =even // pointer of beginning of even list

    while (even && even.next) {
      odd.next = even.next; // Connect odd to next even node
      odd = odd.next;
      even.next = odd.next; // Connect even to next odd node
      even = even.next;

    }
    odd.next=evenHead
    return this._head
  }
  //alternative 
 oddEvenLists(head) {
    if (!head) return head;
  
    var odd = head;
    var even = head.next;
    while (odd.next && odd.next.next) {
      var tmp = odd.next; //storing odd into temp

      odd.next = odd.next.next;
      odd = odd.next;
      tmp.next = odd.next;
    }
    odd.next = even; //swapping temp of old values with even
    return head;
  }

  reverse() {
    let prev = null;
    let current = this._head;
    while (current !== null) {
      let next = current.next;
      prev = current.next;
      prev = current;
      current = next;
    }
    this._head = prev;
  }
}

const list = new LinkedList();
//list.addFirst(9);
list.insert(1);
//list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
// list.delete(9);
// list.getAt(2);
//list.removeduplicate();
// list.getLastNode();
// list.clear()
//list.reverse()
list.getMiddleNode();

console.log(list._head);
