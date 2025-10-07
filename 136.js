/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    if(nums.length == 1) {
        return Number(nums);
    } else {
        for(let i of nums) {
            if(!obj[i]) {
                obj[i] = 1;
            } else {
                obj[i]++;
            }
        }
    }
    for(let i in obj) {
        if(obj[i] == 1) {
            return parseInt(i);
        }
    }
};