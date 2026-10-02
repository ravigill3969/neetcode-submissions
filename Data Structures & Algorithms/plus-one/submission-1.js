class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let res = [];
        let carry = 0;
        let n = digits.length - 1;

        let add_one = digits[n] + 1;

        if (add_one > 9) {
            carry = 1;
            let num = add_one % 10;
            res.push(num);
        } else {
            res.push(add_one);
        }
        n--;

        while (n >= 0) {
            let cur_num = digits[n];
            let num_after_adding_carry = carry + cur_num;

            if (num_after_adding_carry > 9) {
                num_after_adding_carry = num_after_adding_carry % 10;
            } else {
                carry = 0;
            }

            console.log(n);
            res.unshift(num_after_adding_carry);
            n--;
        }

        if (carry > 0) {
            res.unshift(carry);
        }

        return res;
    }
}
