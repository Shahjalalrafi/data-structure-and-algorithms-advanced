
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1

    while(start <= end) {
        let middle = Math.round((start + end) / 2)
        if(arr[middle] === value) return middle

        if(value > arr[middle]) {
            start = middle + 1
        }else if(value < arr[middle]) {
            end = middle -1
        }
    }   
    return -1
}

console.log(binarySearch([2, 3, 4, 7, 34, 66], 3))

