
func lengthOfLongestSubstring(s string) int {
	var res int

	set := make(map[string]struct{})

	prev := 0

	for next := 0; next < len(s); next++ {

		for {
			if _, ok := set[string(s[next])]; !ok {
				break
			}

			delete(set, string(s[prev]))
			prev++
		}

		set[string(s[next])] = struct{}{}

		res = max(res, next-prev+1)

	}

	return  res
}