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

    set(key, value) {
        let address = this._hash(key);

        if(!this.data[address]) {
            this.data[address] = [];
        }

        console.log(address)
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];

        if(currentBucket) {
            for(let i = 0; i< currentBucket.length; i++) {
                if(currentBucket[i][0]) {
                    return currentBucket[i][1]
                }
            }
        }
    }


    keys() {
        if(!this.data.length) return undefined
        
        let allKeys = [];
        for(let i = 0 ; i < this.data.length; i++) {
            if(this.data[i]) {
                allKeys.push(this.data[i][0][0]);
            }
        }

        return allKeys
    }


    // Another way to find keys
    keys() {
        if(!this.data.length) return undefined
        
        let allKeys = [];
        // loop through all the elements
        for(let i = 0 ; i < this.data.length; i++) {
             // if it's not an empty memory cell
            if(this.data[i]) {
                if(this.data[i].length > 1) {
                    // but also loop through all the potential collisions
                    for(let j = 0; j < this.data[i].length; j++) {
                        allKeys.push(this.data[i][j][0]);
                    }
                }else {
                    allKeys.push(this.data[i][0][0]);
                }
            }
        }

        return allKeys
    }

}

let myHashTable = new HashTable(10);
// console.log(myHashTable._hash("grapes"));
myHashTable.set("grapes", 1000);
myHashTable.set("apple", 5000);
myHashTable.set("orange", 10);
// myHashTable.set("banana", 100);
myHashTable.get("apple");

console.log(myHashTable.keys());