class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // console.log(hash);
        }

        return hash;
    }

}

let myHashTable = new HashTable(10);
// console.log(myHashTable._hash("grapes"));
myHashTable.set("grapes", 1000);
myHashTable.set("apple", 5000);
myHashTable.get("apple")