class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 1;
        let cn = nums[0];

        for (let i = 0; i < nums.length; i++) {
            if (count == 0) {
                cn = nums[i];
                count++;
            }

            if (nums[i] != cn) {
                count--;
            } else {
                count++;
            }
        }

        console.log(cn)
        return cn
    }
}
