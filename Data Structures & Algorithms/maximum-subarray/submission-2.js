class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let globalMax = -Infinity;
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max + nums[i]);
            globalMax = Math.max(max, globalMax);
        }

        console.log(max);
        return globalMax;
    }
}
