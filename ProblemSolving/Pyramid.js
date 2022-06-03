function pyramid(n) {
    let midPoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = "";

        for (let column = 0; column < n * 2 - 1; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += "#";
            } else {
                level += "-"
            }
        }
        console.log(level);
    }
}

pyramid(5)