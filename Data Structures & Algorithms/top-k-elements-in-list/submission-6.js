class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let arr = new Array(nums.length + 1).fill(null).map(() => [])
        nums.sort((a, b) => a - b)
        let count = 1

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1]) {
                count++
            } else {
                arr[count].push(nums[i])
                count = 1
            }
        }

        let res = []

        console.log(arr)

        for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
            if (arr[i].length > 0) {
                res.push(...arr[i])
            }
        }

        console.log(res)
        return res
    }
}