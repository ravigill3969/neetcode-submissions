class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        let res = BigInt(num1) * BigInt(num2)
        return res
    }
}
