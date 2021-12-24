function insertionSort(arr) {
    for(let i = 1; i< arr.length; i++) {
        for(let j = i; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp

                // another way swaping
                // [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }else {
                break
            }
        }
    }
    return arr
}

console.log(insertionSort([3, 23, -12, 34]))