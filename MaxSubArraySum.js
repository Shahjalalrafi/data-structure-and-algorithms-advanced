//write a function called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {
    if(arr.length < n) {
        return null
    }

    let max = -Infinity

    for(let i = 0; i < arr.length -n +1; i++) {
        let temp = 0
        for(let j = 0; j < n; j++) {
            temp += arr[i+j]
            console.log(temp)
            if(temp > max) {
                max = temp
            }
        }
    }
    return max
}

console.log(maxSubarraySum([2, 4, 6, 3], 3))