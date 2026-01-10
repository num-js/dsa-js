class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  get(index) {
    return this.data[index];
  }


  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}



const myNewArray = new MyArray();
// console.log("My Initial Array --- ", myNewArray);

myNewArray.push("JavaScript");
myNewArray.push("React");
myNewArray.push("NodeJS");
myNewArray.push("NextJS");

console.log("After data inserted in My Array --- ", myNewArray);

// console.log("get element of index 2 ---", myNewArray.get(2));

// console.log("Pop last item from My Array --- ", myNewArray.pop());
// console.log("My Array after pop --- ", myNewArray);

// console.log("shift first item --- ", myNewArray.shift());
// console.log("My Array after shift --- ", myNewArray);

console.log("delete item of index 2 ---", myNewArray.deleteByIndex(1));
console.log("My Array after Delete --- ", myNewArray);

