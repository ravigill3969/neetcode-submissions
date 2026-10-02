class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] < nums[right]) {
                console.log(nums[left]);
                return nums[left];
            }

            let mid = Math.floor((left + right) / 2);

            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
    }
}
