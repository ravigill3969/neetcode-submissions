class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let stack = [[0, nums[0]]];
        let res = [];

        for (let i = 1; i < k; i++) {
            while (stack.length > 0 && stack[stack.length - 1][1] < nums[i]) {
                stack.pop();
            }

            stack.push([i, nums[i]]);
        }

        res.push(stack[0][1]);

        let l = 0;
        for (let r = k; r < nums.length; r++) {
            if (l === stack[0][0]) {
                stack.shift();
            }
            l++

            while (stack.length > 0 && stack[stack.length - 1][1] < nums[r]) {
                stack.pop();
            }
            stack.push([r, nums[r]]);

            res.push(stack[0][1]);
        }

        console.log(res)
        return res
    }
}
