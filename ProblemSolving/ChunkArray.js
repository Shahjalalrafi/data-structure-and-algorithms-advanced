function chunkArray(arr, num) {
    let result = [];
    let cArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (cArr.length !== num) {
            cArr.push(arr[i]);
        } else {
            result.push(cArr);
            cArr = [];
            cArr.push(arr[i]);
        }
    }
    if (cArr.length) {
        result.push(cArr);
    }
    return result;
}


// Another best implementation 
function chunkArray(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19))