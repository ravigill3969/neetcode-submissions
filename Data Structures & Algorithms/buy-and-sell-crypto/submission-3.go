
func maxProfit(prices []int) int {
	var res int

	prev := 0

	for next := 1; next < len(prices); next++ {
		if prices[next] < prices[prev] {
			prev = next
		}

		res = max(prices[next] - prices[prev] , res)
	}

	return res
}
