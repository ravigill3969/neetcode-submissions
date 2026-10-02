class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0

        let l = 0
        for (let i = 1; i < prices.length; i++) {
            let diff = prices[i] - prices[l]
            res = Math.max(diff, res)


            if (prices[l] > prices[i]) {
                l = i
            }
        }
        console.log(res)
        return res
    }
}
