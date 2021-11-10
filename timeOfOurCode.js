function sumOfAll(n) {
    let total = 0;
    for(let i = 0; i<= n; i++) {
        total += i
    }
    return total
}

console.log(sumOfAll(1000000000))

function sumOfAll(n) {
    return n * (n+1) / 2
}


function min5Log(n) {
    for( let  i = 0; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}
min5Log(100) // o(n)

function max5Log(n) {
    for( let  i = 0; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

max5Log(2) // o(2)


function sum(arr) {
    let total = 0;
    for(let i = 0; i< arr.length; i++) {
        total += arr[i]
    }
    return total
} 

console.log(sum([23, 4, 6]))

function double(arr) {
    let newArr = []
    for(let i = 0; i< arr.length; i++) {
        newArr.push(arr[i] *2)
    }
    return newArr
}

console.log(double([3, 4, 5, 20 ,34,64]))


const myObjec = {
    channel: "CODE ABC",
    instructor: "Shahjalal rafi",
    videos: [2, 3,23, 53, 20]
}

console.log(myObjec.hasOwnProperty("instructor"))


