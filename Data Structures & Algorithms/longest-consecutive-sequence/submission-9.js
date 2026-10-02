class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length < 1) return 0

        let set = new Set([...nums])
        let longest = 1
        let count = 1

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                let c = nums[i]
                while (set.has(c + 1)) {
                    count++
                    c = c + 1
                }
            }

            longest = Math.max(count, longest)
            count = 1

        }
        console.log(longest)

        return longest
    }
}
