class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    let min = Infinity;
    for (let i = 0; i < this.stack.length; i++) {
      min = Math.min(this.stack[i], min);
    }
    return min;
  }
}
