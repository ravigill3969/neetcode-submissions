class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (
                stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                let prevIndex = stack.pop();
                res[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }

        console.log(res);

        return res;
    }
}
