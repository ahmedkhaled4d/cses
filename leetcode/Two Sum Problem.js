/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashmap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(target - nums[i])) {
            return [i, hashmap.get(target - nums[i])]
        }
        hashmap.set(nums[i], i)
    }
    return [];
};
