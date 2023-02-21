

function MiddlinkedList(head) {
    let slow = head;
    let fast = head;
        
    // While we have not reached the end of the linked list, have one pointer 'fast' 
    //move twice as fast as the slow pointer 'slow'. 
    //Once fast has reached the end of the list, 'slow' must therefore be in the middle of the list.
    while (fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow
  }
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  };
  
  console.log(MiddlinkedList(head))
  