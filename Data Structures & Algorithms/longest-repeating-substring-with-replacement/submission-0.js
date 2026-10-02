class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let res = 0
        let maxF = 0

        let l = 0
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1)
            maxF = Math.max(map.get(s[i]), maxF)

            while ((i - l + 1) - maxF > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            res = Math.max(i - l + 1, res)


        }

        console.log(res)
        return res
    }
}
