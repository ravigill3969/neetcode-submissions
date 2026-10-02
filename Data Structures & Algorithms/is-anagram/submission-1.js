class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let arrs = new Array(26).fill(0);
        let arrt = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            let codes = s[i].charCodeAt() - 97;
            let codet = t[i].charCodeAt() - 97;

            arrs[codes]++;
            arrt[codet]++;
        }

        for (let i = 0; i < arrs.length; i++) {
            if (arrt[i] != arrs[i]) {
                return false;
            }
        }

        return true;
    }
}
