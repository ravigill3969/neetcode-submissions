class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        function bt(start, arr, cs) {
            if (cs > target) return;

            if (cs === target) res.push([...arr]);
            for (let i = start; i < nums.length; i++) {
                arr.push(nums[i]);

                bt(i, arr, cs + nums[i]);
                arr.pop();
            }
        }

        bt(0, [], 0);

        console.log(res);
        return res;
    }
}
