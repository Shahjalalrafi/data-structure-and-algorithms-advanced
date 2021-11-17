
// recursion functuion call iteself inside 
function sumOfnum(n) {
    if(n == 1) return 1

    return n + sumOfnum(n-1)
}

console.log(sumOfnum(10))