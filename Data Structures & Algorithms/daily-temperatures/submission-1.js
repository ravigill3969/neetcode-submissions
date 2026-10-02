class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (
                stack.length > 0 &&
                temperatures[stack[stack.length - 1]] < temperatures[i]
            ) {
                let j = stack.pop();
                // res.push(i - j + 1);
                res[j] = i - j;
            }

            stack.push(i);
        }

        return res;
    }
}
