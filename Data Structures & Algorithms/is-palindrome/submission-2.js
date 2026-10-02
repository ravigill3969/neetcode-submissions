class Solution {
    /**
  * @param {string} s
  * @return {boolean}
  */
    isPalindrome(s) {
        let set = new Set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'); 
        let left = 0
        let right = s.length - 1

        while (left <= right) {

            while (left < right && !set.has(s[left])) {
                left++
            }

            while (left < right && !set.has(s[right])) {
                right--
            }

            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false
            }

            left++
            right--

        }
        console.log(true);
        return true
    }

}
