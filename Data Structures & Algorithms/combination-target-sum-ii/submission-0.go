
func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	res := [][]int{}

	var bc func(int, []int, int)

	bc = func(cs int, current []int, idx int) {

		if cs == target {
			res = append(res, append([]int{}, current...))
			return
		}
		if cs > target {
			return

		}


		for i := idx; i < len(candidates); i++ {

			if i > idx && candidates[i] == candidates[i-1] {
				continue
			}

			cs = cs + candidates[i]
			current = append(current, candidates[i])

			bc(cs, current, i+1)

			cs = cs - candidates[i]
			current = current[:len(current)-1]
		}
	}

	bc(0, []int{}, 0)

	return res

}