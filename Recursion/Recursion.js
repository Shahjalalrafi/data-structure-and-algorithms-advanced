// function countDown(n) {
//     // for(let i = n; i> 0; i--) {
//     //     console.log(i)
//     // }
//     console.log(n)
//     n--
//     if(n > 0) {
//         countDown(n)
//     }
// }

// countDown(10)


// function sumOfNumber(n) {
//     let sum = 0
//     for(let i = n; i >= 0; i-- ) {
//         sum += i
//     }
//     return sum
// }

// console.log(sumOfNumber(10))


// function sumOfNumber(n) {
//     if(n <= 1 ) return 1

//     return n * sumOfNumber(n -1)
// }

// console.log(sumOfNumber(3))


// 10 + 9
// 19 + 8
// 27 + 7
// 34 + 6
// 40 + 5
// 45 + 4
// 49 + 3
// 52 + 2
// 54 + 1
// 55 + 0
// 55 


function sumOfArraySloe(arr) {
    if(arr.length === 0) return 0
    let rest = arr.slice(1)
    
    return arr[0] + sumOfArraySloe(rest)
}

// Time = bigO(n*n) = n^2
// space = bigO(n)



function sumOfArrayFast(arr) {
    return helperSum(arr, 0)
}

function helperSum(arr, index) {
    if(arr.length === index) return 0

    return arr[index] + helperSum(arr, index + 1)
}

// more efficient
// Time = bigO(n)
// space = bigO(n)


let input = new Array(9000).fill(1)

let now = Date.now()
console.log(sumOfArraySloe(input))
let finsh = Date.now()
console.log(`time elapsed for slowFunction ${finsh - now} ms`)




let start = Date.now()
console.log(sumOfArrayFast(input))
let end = Date.now()
console.log(`time elapsed for fastFunction ${end - start} ms`)