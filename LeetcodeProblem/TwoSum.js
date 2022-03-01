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
    for(let i = 0; i< nums.length; i++) {

        let remaining = target - nums[i] 

        for(let j = i + 1; j < nums.length; j++) {
            if(remaining === nums[j]) return [i, j]
        }

    }

    return false;
};

console.log(twoSum([2,7,11,15, 3], 10))

// remaining = 3




// 3 + 2 = 5
// 3 + 4 = 7
// 2+ 4 = 6

