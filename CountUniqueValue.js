function countUniqueValue(arr) {
    if(arr.length === 0) return false

    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}
console.log(countUniqueValue([1,2,5,7,7, 7,7,99]))