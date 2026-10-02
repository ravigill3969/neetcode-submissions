class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        nums.sort((a, b) => a - b);
        let arr = new Array(nums.length + 1).fill(null).map(() => []);

        let count = 1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1]) {
                count++;
                console.log(count);
            } else {
                arr[count].push(nums[i]);
                count = 1;
            }
        }

        const result = [];
        for (let i = arr.length - 1; i >= 0 && result.length < k; i--) {
            if (arr[i].length > 0) {
                result.push(...arr[i]);
            }
        }

        return result.slice(0, k);
    }
}