class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let newArr = new Array(nums.length).fill(0);

        for (let i = 0; i < nums.length; i++) {
            let cur = nums[i];

            if (newArr[cur] == -1) {
                return cur;
            }

            newArr[cur] = -1;
        }

        return -1;
    }
}
