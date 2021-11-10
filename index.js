// function addUpTo(n) {
//     let total = 0
//     for (let i = 0; i <= n; i++) {
//         total += i
//     }
//     return total
// }



// let time1 = performance.now()
// let time2 = performance.now()
// console.log(`your performance time ${(time2 - time1)/1000}`)


// another approachক্স
// function addUpTo(n) {
//         return n * (n + 1) / 2
//     }
    // const addUpTo = (n) => n * (n + 1) / 2
    // console.log(`your performance time ${(time2 - time1) / 1000}`)
    // let number = 1000000000
    // let result = addUpTo(number)
    // console.log(result)

// let a = 500000000067109000
// let b = 500000000500000000
// console.log(a - b)

// 500000000067109000
// 500000000500000000



// function printAllPairs(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             console.log(i, j)
//         }
//     }
// }

// printAllPairs(3)

// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false
//     }

//     for(let i = 0; i< arr1.length; i++) {
//         let currentIndex = arr2.indexOf(arr1[i] ** 2)
//         if(currentIndex == -1) {
//             return false
//         }
//         arr2.splice(currentIndex, 1)
//     }
//     return true
// }


// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false
//     }

//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     for(let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }

//     for(let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
//     }

//     console.log(frequencyCounter1)
//     for(let key in frequencyCounter1) {
//         if(!(key ** 2) in frequencyCounter2) {
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false
//         }
//     }
//     return true
// }
