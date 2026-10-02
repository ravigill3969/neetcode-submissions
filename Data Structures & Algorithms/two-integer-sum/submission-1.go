
func twoSum(nums []int, target int) []int {
	hashmap := make(map[int]int)
	res := []int{}

	for i, e := range nums {
		diff := target - e

		if val, ok := hashmap[diff]; ok {
			return []int{val, i}
		}

		hashmap[e] = i
	}

	fmt.Println(hashmap)

	return res
}