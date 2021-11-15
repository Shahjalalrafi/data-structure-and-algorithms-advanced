// write a functuion called sumZero which accepts a sorted array of integers.The function should fing the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumOfZero(arr) {
    for(let i = 0; i < arr.length; i++) {//n
        for( let j = 1; j < arr.length; j++) {//n
            if((arr[i] + arr[j]) === 0 ) {
                return [arr[i], arr[j]]
            }
        }
    }
}

// n*n = n2(n square)
// time complexity 0(n2)
console.log(sumOfZero([4, 2, -2, -4]))


// another approach
// more efficient

function sumOfZero(arr) {
    let start = 0
    let end = arr.length - 1

    while(start < end) {
        let sum = arr[start] + arr[end]
        console.log(sum)
        if(sum === 0) {
            return [arr[start], arr[end]]
        }else if(sum > 0) {
            end--
        }else {
            start++
        }
    }
}


// This is more efficient
// Time complexity o(n)
console.log(sumOfZero([-4,-2, 2, 4]))

