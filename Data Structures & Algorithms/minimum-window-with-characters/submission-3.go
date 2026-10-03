
func minWindow(s string, t string) string {
	if len(s) < len(t) {
		return ""
	}

	resStr := ""
	resLen := math.MaxInt

	tmap := make(map[byte]int)
	smap := make(map[byte]int)

	for i := 0; i < len(t); i++ {
		tmap[t[i]]++
	}

	have := 0
	need := len(tmap)

	//tmap is one small string alright
	prev := 0
	for next := 0; next < len(s); next++ {
		smap[s[next]]++

		if tmap[s[next]] > 0 && smap[s[next]] == tmap[s[next]] {
			have++
		}

		for have == need {
			if next-prev+1 < resLen {
				resLen = next - prev + 1
				resStr = s[prev : next+1]			}

			smap[s[prev]]--

			if tmap[s[prev]] > 0 && smap[s[prev]] < tmap[s[prev]] {
				have--
			}

			prev++
		}

	}

	return resStr
}