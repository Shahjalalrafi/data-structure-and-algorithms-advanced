// bubble sort implementation

function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i-1; j++) {
            console.log("to see", arr, arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}

// optimized bubble sort implementation
function bubbleSort(arr) {
    let isSwap = false
    for(let i = arr.length; i > 0; i--) {
        isSwap = false
        for(let j = 0; j < i-1; j++) {
            console.log("to see", arr, arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwap = true
            }
        }
        if(!isSwap) break
    }
    console.log(arr)
}


bubbleSort([9, 1, 2, 3, 4])

