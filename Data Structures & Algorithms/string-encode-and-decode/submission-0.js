class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";

        for (let i = 0; i < strs.length; i++) {
            let count = strs[i].length;
            str += count + "#" + strs[i];
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let counterStr = "";

            while (str[i] != "#") {
                counterStr += str[i];
                i++;
            }

            let count = parseInt(counterStr);
            i++; // skip '#'

            let s = str.substring(i, i + count);
            res.push(s);

            i += count;
        }

        return res;
    }
}
