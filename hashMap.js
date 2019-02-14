// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


var twoSum = function(nums, target) {
    let storage = {};
        for(let i=0;i<nums.length;i++) {
            const match = target-nums[i];
            if (match in storage) {
                console.log(storage)
                return [storage[match],i]
                }
            storage[nums[i]] = i
        }
    
};

module.exports = {
	twoSum
}