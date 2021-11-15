function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }

    for(let i = 0; i< arr1.length; i++) {//n
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if(currentIndex === -1) {
            return false
        }

        arr2.splice(currentIndex, 1)//n
    }
    return true
}

// n*n = n2(n square)
// time complexity 0(n2)
same([2, 3, 6], [36, 9, 4]) // true


// diffrent approach
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }

    let sequenceCounter1 = {}
    let sequenceCounter2 = {}
    for(let val of arr1) {//n
        sequenceCounter1[val] = (sequenceCounter1[val] || 0) + 1
    }

    for(let val of arr2) {//n
        sequenceCounter2[val] = (sequenceCounter2[val] || 0) + 1
    }

    for(let key in sequenceCounter1) {//n
        if(!(key ** 2) in sequenceCounter2) {
            return false
        }
        if(sequenceCounter2[key **2] !== sequenceCounter1[key]) {
            return false
        }
    }

    return true
}

// This is more efficient
//n+n+n = 3n(where constant doesnot matter. we can ignore 3)[time complexity o(n)]
// Time complexity o(n)
same([2, 3, 6], [36, 9, 4]) // true