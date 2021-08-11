class MyNormalQueue {
  private q: Array<any>;

  constructor() {
    this.q = [];
  }

  public push(n: number) {
    this.q.push(n);
  }

  public peek(): number {
    return this.q[0];
  }

  public pop(): number {
    return this.q.shift();
  }

  public empty(): boolean {
    return this.q.length === 0;
  }

  public size(): number {
    return this.q.length;
  }
}

class MyStack {
  private q1: MyNormalQueue;
  private topElement: number;

  constructor() {
    this.q1 = new MyNormalQueue();
  }

  push(x: number): void {
    this.q1.push(x);
    this.topElement = x;
  }

  pop(): number {
    let size = this.q1.size();
    while (size > 2) {
      this.q1.push(this.q1.pop());
      size--;
    }
    this.topElement = this.q1.peek();
    this.q1.push(this.q1.pop());
    return this.q1.pop();
  }

  top(): number {
    return this.topElement;
  }

  empty(): boolean {
    return this.q1.empty();
  }
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/
