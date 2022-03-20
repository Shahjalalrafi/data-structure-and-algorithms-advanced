
// Question: https://leetcode.com/problems/container-with-most-water/


var maxArea = function (heights) {
    let totalWater = 0;

    for (let i = 0; i < heights.length; i++) {

        for (let j = i + 1; j < heights.length; j++) {
            
            let height
            if(heights[i] > heights[j]) {
                // 1            // 8
                height = heights[j]
            }else {
                height = heights[i]
            }

            let width = j - i

            let currentWater = height * width ;
            
            // console.log(totalWater);
            if(totalWater < currentWater) {
                totalWater = currentWater;
            }

            // console.log(currentWater)
        }

    }
    return totalWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
