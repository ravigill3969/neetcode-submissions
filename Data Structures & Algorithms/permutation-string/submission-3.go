
func checkInclusion(s1 string, s2 string) bool {
	arr1 := [26]int{}
	arr2 := [26]int{}

	for i := 0; i < len(s1); i++ {
		arr1[s1[i]-'a']++
	}

	prev := 0
	for next := 0; next < len(s2); next++ {
		arr2[s2[next]-'a']++

		if next-prev+1 > len(s1) {
			arr2[s2[prev]-'a']--
			prev++

		}

		isOk := Compare(arr1, arr2)

		if isOk {
			return true
		}

	}

	return false
}

func Compare(arr1 [26]int, arr2 [26]int) bool {
	for i, _ := range arr1 {
		if arr1[i] != arr2[i] {
			return false
		}
	}

	return true
}
