class Solution {
    /**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
    twoSum(numbers, target) {
        let res = [-1, -1]
        let left = 0
        let right = numbers.length - 1

        while (left < right) {
            let sum = numbers[left] + numbers[right]

            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else if (sum === target) {
                res[0] = left + 1
                res[1] = right + 1
                console.log(res)
                return res
            }
        }
        return res

    }
}
