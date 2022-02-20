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
        return this.data
    }
}

const newArray = new myArray()
newArray.push("hello")
newArray.push("hi")
newArray.get(1)
console.log(newArray)