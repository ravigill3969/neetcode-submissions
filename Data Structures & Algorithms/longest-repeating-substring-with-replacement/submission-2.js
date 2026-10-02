class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let l = 0;
        let maxFreq = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            let char = s[r];

            map.set(char, (map.get(char) || 0) + 1);

            maxFreq = Math.max(map.get(s[r]), maxFreq);

            if (r - l + 1 - maxFreq > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }

            res = Math.max(r - l + 1, res);
        }

        console.log(res);
        return res;
    }
}
