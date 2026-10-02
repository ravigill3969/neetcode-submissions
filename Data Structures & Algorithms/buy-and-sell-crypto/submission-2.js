class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let min = Infinity;

        for (let i = 0; i < prices.length; i++) {
            min = Math.min(prices[i], min);

            res = Math.max(prices[i] - min, res);
        }

        console.log(res)
        return res
    }
}
