// Question: https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++) {

        for(let j = i + 1; j < nums.length; j++) {
            if((nums[i] + nums[j]) === target) return [i, j]
        }

    }

    return false;
};



// better than before
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++) { // n

        let remaining = target - nums[i] 

        for(let j = i + 1; j < nums.length; j++) { //n
            console.log(i, j);
            if(remaining === nums[j]) return [i, j];
        }

    }

    return false;
};

// o (1) = space complexity o(1)

// n * n = n2 = time Complexity n^2

// i = 0;
// j = 1, 2, 3, 4;

// i = 1;
// j = 2, 3, 4

console.log(twoSum([2,7,11,15, 4, 5, 7, 8, 34, 2], 9));

// remaining = 3


// 3 + 2 = 5
// 3 + 4 = 7
// 2+ 4 = 6