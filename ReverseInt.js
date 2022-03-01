// function reverseInt(x) {
//     let str = x.toString().split("");

//     let reversed = [];
//     let minus = [];

//     for(let char of str) {
//         if(char === "-") {
//             minus.push(char);
//         }else {
//             reversed.unshift(char);
//         }
//     }

//     // console.log(reversed);
//     // console.log(minus);
//     let solidNumber = [];

//     for(let i = 0; i< reversed.length; i++) {
//         if(reversed[i] === "0" && solidNumber.length === 0) {

//         }else {
//             solidNumber.push(reversed[i]);
//         }
//     }
//     let arr = minus.concat(solidNumber);



//     if(arr.length) {
//         if(parseInt(arr.join("")) > (Math.pow(2, 31) - 1)) {
//             return 0;
//         }else {
//             return parseInt(arr.join(""));
//         }
//     }else {
//         return 0;
//     }
// }

// function reverseInt(x) {
//     if (x > -10 && x < 10) return x;

//     const result = Math.abs(x).toString().split('').reverse().join('');
//     if (result > (Math.pow(2, 31) - 1)) return 0;
//     return parseInt(result, 10) * (x < 0 ? -1 : 1);
// }

// this is perfect for reverseInt
function reverseInt(x) {
    const reversed = parseInt(x
        .toString()
        .split('')
        .reverse()
        .join(''));

    if (reversed > 0x7FFFFFFF) {
        return 0;
    }

    return reversed * Math.sign(x);
}

console.log(reverseInt(-2147483648));