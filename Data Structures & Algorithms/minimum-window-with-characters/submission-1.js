class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = new Map()
        let sMap = new Map()
        let have = 0
        let need = t.length
        let res = ""
        let resLength = Infinity

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
            sMap.set(t[i], 0)
        }

        need = tMap.size;


        let l = 0
        for (let r = 0; r < s.length; r++) {


            if (tMap.has(s[r])) {
                sMap.set(s[r], sMap.get(s[r]) + 1)
                if (sMap.get(s[r]) === tMap.get(s[r])) {
                    have++;
                }
            }


            while (have === need) {
                if (r - l + 1 < resLength) {
                    resLength = r - l + 1
                    res = s.slice(l, r + 1)
                }
                if (sMap.has(s[l])) {
                    sMap.set(s[l], sMap.get(s[l]) - 1)
                    if (sMap.get(s[l]) < tMap.get(s[l])) {
                        have--;
                    }
                }
                l++
            }

        }


        return res
    }
}
