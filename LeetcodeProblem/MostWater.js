// Question: https://leetcode.com/problems/container-with-most-water/


var maxArea = function (height) {
    if(height.length <= 1) return 0;

    let maxWater = 0;
    for (let i = 0; i < height.length; i++) {
        // let len
        // let wid
        for (j = i + 1; j < height.length; j++) {
            // let len = Math.min(height[i], height[j])
            let len;
             if (height[i] < height[j]) {
                len = height[i]
            } else {
                len = height[j]
            }
            let wid = j - i;
            let totalWater = len * wid;
            if(maxWater < totalWater) maxWater = totalWater
        }

    }
    return maxWater
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))