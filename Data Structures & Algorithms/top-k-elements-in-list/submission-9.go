

func topKFrequent(nums []int, k int) []int {
	var res []int

	hashmap := make(map[int]int)

	for _, e := range nums {
		hashmap[e]++
	}

	bucketArr := make([][]int, len(nums)+1)

	for k, v := range hashmap {
		bucketArr[v] = append(bucketArr[v], k)
	}

	for i := len(bucketArr) - 1; i >= 0; i-- {

		if len(res) == k {
			break
		}

		curarr := bucketArr[i]

		for j := 0; j < len(curarr); j++ {
			res = append(res, curarr[j])
		}

	}

	return res
}
