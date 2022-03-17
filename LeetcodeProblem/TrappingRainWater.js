// question: https://leetcode.com/problems/trapping-rain-water/

var trap = function(heights) {
    let total = 0;
    
    for(let p = 0; p< heights.length; p++) {
        let leftP = p;
        let rightP = p;
        let maxLeft = 0;
        let maxRight = 0;

        while(leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }

        while(rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        let current = heights[p];
        if(maxLeft > maxRight) {
            total += maxRight - current;
        }else {
            total += maxLeft - current;
        }
    }
    return total;
}

console.log(trap([4,2,0,3,2,5]));