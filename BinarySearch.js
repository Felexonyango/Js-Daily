// Binary search is a search algorithm that finds the position of
// a target value within a sorted array. It works by repeatedly dividing
//  in half the portion of the array that could contain the target value until the value
//  is found or the remaining portion of the array is empty.

//example  array = [5, 10, 15, 20, 25];
function Binarysearch(array, target) {
  const left = 0; //first element
  const right = array.length - 1; //last element

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = array[mid];

    if (value === target) {
      return mid;
    } else if (value < target) {
      return (left = mid + 1);
    } else {
      return (right = mid - 1);
    }
  }
  return -1;
}

const array = [5, 10, 15, 20, 25];
const target = 15;
console.log(Binarysearch(array, target));

// Binary search tree

//A tree is a collection of nodes connected by some edges
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      // Creating a node and initialising
      // with data
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        // if the data is less than the node
    // data move left of the tree
        if (data < node.data) {
          if (node.left === null) {
            // if left is null insert node here
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            // if left is not null recur until
            // null is found
            return searchTree(node.left);
          }
        }
        else{

            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              // if right is not null recur until
              // null is found
              return searchTree(node.right);
            } else {
              return null;
            }
        }
        
      };
    }
  }
}

const  data = new BST();
 
data.add(15);
data.add(25);
data.add(10);
data.add(7);
data.add(22);
data.add(17);
data.add(13)
data.add(5)
data.add(9)
data.add(27)
console.log(data);