
let temperature = [-2, 4, 45, 23, -4, "error", -6, -8, 34, 43]

function getHigherAndLower(arr) {
    // create a higher variable
    let higher = arr[0]
    // create a lower variable
    let lower = arr[0]

    //iterate the whole array
    for (let i = 0; i < arr.length; i++) {
        // let's check is there has any error
        if(typeof arr[i] !== "number") continue
        console.log(typeof arr[i])

        //if higher variable has smaller number than our current number then value will be our current element
        if (higher < arr[i]) {
            higher = arr[i]
        }
        //if lower variable has bigger number than our current number then value will be our current element
        if (lower > arr[i]) {
            lower = arr[i]
        }
    }

    return higher -lower
}

console.log(getHigherAndLower(temperature))