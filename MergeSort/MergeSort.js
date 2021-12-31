function mergerSort(arr1, arr2) {
    let result = []
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        }else {
            result.push(arr1[i])
            i++
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while(j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result

}

console.log(mergerSort([12, 44, 63], [12, 99, 100, 103]))