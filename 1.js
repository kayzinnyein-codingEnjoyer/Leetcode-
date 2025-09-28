/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let k = 0; k < nums.length; k++) {
        for(let i = k + 1; i < nums.length; i++) {
            let add = nums[k] + nums[i];
            if(add == target) {
                return [k, i];
                break;
            }
        }
    }
};