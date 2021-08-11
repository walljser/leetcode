class Stack {
  private stack: Array<any>;

  constructor() {
    this.stack = [];
  }

  public push(n: number) {
    this.stack.push(n);
  }

  public peek(): number {
    return this.stack[this.stack.length - 1];
  }

  public empty(): boolean {
    return this.stack.length === 0;
  }

  public pop(): number {
    return this.stack.pop();
  }
}

class MyQueue {
  private s1: Stack

  private s2: Stack

  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  push(x: number): void {
    this.s1.push(x);
  }

  pop(): number {
    // 先调用peek，保证s2不空
    this.peek();
    return this.s2.pop();
  }

  peek(): number {
    if (this.s2.empty()) {
      while (!this.s1.empty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.peek();
  }

  empty(): boolean {
    return this.s1.empty() && this.s2.empty();
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
