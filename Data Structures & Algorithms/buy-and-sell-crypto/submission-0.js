class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxDiff = -Infinity
        let lP = 0
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < prices[lP]) {
                lP = i
            }

            maxDiff = Math.max(prices[i] - prices[lP], maxDiff)
        }

        return maxDiff
    }
}
