// implement a function called coundUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be nagative numbers in the array,but it will always be sorted.

function countUniqueValues(arr) {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i +1
}

// n*n = n2(n square)
// time complexity 0(n2)
console.log(countUniqueValues([1,1,1,1,2,2,2,3]))
