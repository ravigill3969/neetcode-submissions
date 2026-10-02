class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let min = Infinity;

        while (left <= right) {
            if (nums[left] < nums[right]) {
                return nums[left];
            }

            let mid = Math.floor((left + right) / 2);
            min = Math.min(nums[mid], min);
            if (nums[left] <= nums[mid]) {
                left = mid + 1;
            } else {
                right = mid
            }
        }

        console.log(min);
        return min
    }
}
