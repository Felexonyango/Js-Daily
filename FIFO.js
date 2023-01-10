class MyQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    push(item) {
      this.stack1.push(item);
    }
  
    peek() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2[this.stack2.length - 1];
    }
  
    pop() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  
    empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  