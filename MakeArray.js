class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
}

const newArray = new myArray();
newArray.push("hello");
newArray.push("hi");
newArray.push("hiii");
newArray.pop();
newArray.push("hiii");
console.log(newArray);