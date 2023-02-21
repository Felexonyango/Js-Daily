class Node {
  //node we have data, and next for reference to next act as pointer property
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const n1 = new Node(200);
console.log(n1);
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


  insertAtIndex(data){
    

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
    while (current.next) {
      //if head does not contain data to be removed   enters into next in if statement
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }


  getAt(index){
    let current=this._head;
    let count =0
    while(current){

      if(count==index){
        console.log(current.data,'heelo')
      }
      current ++
      current=current.next
  
    }
    }

}


const list = new LinkedList();
list.addFirst(9);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.delete(1);
list.getAt(2)

console.log(list._head); // Node { data: 1, next: Node { data: 2, next: Node { data: 3, next: Node { data: 4, next: null } } } }

//time to try
