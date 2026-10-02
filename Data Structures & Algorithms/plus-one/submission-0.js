class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let res = [];
        let num = (parseInt(digits.join("")) + 1).toString();
        for (let i = 0; i < num.length; i++) {
            res.push(parseInt(num[i]));
        }

        return res;
    }
}
