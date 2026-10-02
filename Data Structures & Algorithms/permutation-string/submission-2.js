class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        let arr1 = new Array(26).fill(0);
        let arr2 = new Array(26).fill(0);

        let a_char_code = "a".charCodeAt();

        for (let i = 0; i < s1.length; i++) {
            let curs1_char_char_code = s1[i].charCodeAt();
            let curs2_char_char_code = s2[i].charCodeAt();

            arr1[curs1_char_char_code - a_char_code]++;
            arr2[curs2_char_char_code - a_char_code]++;
        }


        function isMatch(arr1, arr2) {
            console.log(arr1, arr2)
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return false;
                }
            }

            return true;
        }

        if (isMatch(arr1, arr2)) {
            return true;
        }



        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            let cur_char_code_at_l = s2[l].charCodeAt();
            let cur_char_code_at_r = s2[r].charCodeAt();

            arr2[cur_char_code_at_l - a_char_code]--;
            l++;

            arr2[cur_char_code_at_r - a_char_code]++;

            if (isMatch(arr1, arr2)) {
                return true;
            }
        }



        return false;
    }
}
