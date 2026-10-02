class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];

        function bt(start, array) {
            res.push([...array]);

            for (let i = start; i < nums.length; i++) {
                array.push(nums[i]);
                bt(i + 1, array);
                array.pop();
            }
        }

        bt(0, []);

        return res
    }
}
