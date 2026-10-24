
func generateParenthesis(n int) []string {
	res := []string{}

	if n == 1 {
		return []string{"()"}
	}

	var bt func([]string, int, int)

	bt = func(s []string, open int, close int) {
		if open > n {
			return
		}

		if open == n && close == n {
			res = append(res, strings.Join(s, ""))
			return
		}

		if open < n {
			s = append(s, "(")
			bt(s, open+1, close)
			s = s[:len(s)-1]

		}

		if close < open {
			s = append(s, ")")
			bt(s, open, close+1)

			s = s[:len(s)-1]
		}

	}

	bt([]string{}, 0, 0)

	return res
}