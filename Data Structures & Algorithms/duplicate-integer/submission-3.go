func hasDuplicate(nums []int) bool {

	hashmap := make(map[int]int)

	for _, e := range nums{
		if _, ok := hashmap[e]; ok{
			return true
		}

		hashmap[e] = 1
	}

	return false
}