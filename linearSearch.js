// write a function take an array and a value. find the value from the array and return the index of where find the value


function linearSearch(arr, value) {
    for(let i = 0;i< arr.length; i++) {
        if(arr[i] === value) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([2, 3, 5, 6], 2))