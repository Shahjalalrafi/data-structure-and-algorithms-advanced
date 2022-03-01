function reverseInt(n) {
    let str = n.toString().split("");

    let reversed = [];
    let minus = [];

    for(let char of str) {
        if(char === "-") {
            minus.push(char);
        }else {
            reversed.unshift(char);
        }
    }

    // console.log(reversed);
    // console.log(minus);
    let solidNumber = [];

    for(let i = 0; i< reversed.length; i++) {
        if(reversed[i] === "0" && solidNumber.length === 0) {
            
        }else {
            solidNumber.push(reversed[i]);
        }
    }
    let arr = minus.concat(solidNumber);

    if(arr.length) {
        return parseInt(arr.join(""));
    }else {
        return 0;
    }
}

console.log(reverseInt(0));