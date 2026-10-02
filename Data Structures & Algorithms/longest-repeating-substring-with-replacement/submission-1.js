class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let res = 0
        let l = 0
        let maxR = 0

        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            maxR = Math.max(maxR, map.get(s[r]))

            if ((r - l + 1 - maxR) <= k) {
                res = Math.max(r - l + 1, res)
            } else {
                map.set(s[l], (map.get(s[l]) || 0) - 1)
                l++
            }
        }

        console.log(res)
        return res
    }
}
