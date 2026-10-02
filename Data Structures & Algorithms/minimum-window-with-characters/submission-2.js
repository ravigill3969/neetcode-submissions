class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return ""

        let have = 0
        let resLength = Infinity
        let res = [-1, -1]

        let l = 0

        let mapAdd = new Map()
        let mapCheck = new Map()

        for (let i = 0; i < t.length; i++) {
            mapCheck.set(t[i], (mapCheck.get(t[i]) || 0) + 1)
            mapAdd.set(t[i], 0)
        }

        for (let i = 0; i < s.length; i++) {
            if (mapCheck.has(s[i])) {
                mapAdd.set(s[i], mapAdd.get(s[i]) + 1)

                if (mapAdd.get(s[i]) === mapCheck.get(s[i])) {
                    have++
                }
            }

            while (have === mapCheck.size) {
                let resL = i - l + 1

                if (resL < resLength) {
                    res[0] = l
                    res[1] = i
                    resLength = resL
                }

                if (mapAdd.has(s[l])) {
                    mapAdd.set(s[l], mapAdd.get(s[l]) - 1)

                    if (mapAdd.get(s[l]) < mapCheck.get(s[l])) {
                        have--
                    }
                }

                l++
            }
        }

        if (resLength === Infinity) return ""
        return s.slice(res[0], res[1] + 1)
    }
}
