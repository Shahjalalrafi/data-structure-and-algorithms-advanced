function steps(n) {
    for(let row = 0; row < n; row++) {
        let stair = "";
        
        for( let column = 0; column < n; column++) {
            if(column <= row) {
                stair += "#";
            }else {
                stair += " ";
            }
        }
        console.log(stair);
    }
}

steps(4)