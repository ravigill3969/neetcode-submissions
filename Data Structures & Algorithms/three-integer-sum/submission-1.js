class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let res = []
        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue

            let j = i + 1
            let k = nums.length - 1

            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k]

                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[k]])

                    j++
                    k--

                    while (j < k && nums[j] === nums[j - 1]) j++
                    while (j < k && nums[k] === nums[k + 1]) k--

                } else {
                    sum > 0 ? k-- : j++
                }

            }
        }
        console.log(res)

        return res

    }
}
