
func longestConsecutive(nums []int) int {
	var res int
	hashmap := make(map[int]bool)

	for _, e := range nums {
		hashmap[e] = true
	}

	for _, e := range nums {

		if !hashmap[e-1] {
			count := 0

			val := e
			for hashmap[val] {
				val = val + 1
				count++
			}
			res = max(res, count)
		}

	}

	return res
}