class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let set = new Set(["+", "-", "*", "/"]);
        let stack = [];
        let res = 0;

        for (let i = 0; i < tokens.length; i++) {
            if (!set.has(tokens[i])) {
                stack.push(tokens[i]);
                continue;
            }

            console.log(stack);

            let a = parseInt(stack.pop());
            let b = parseInt(stack.pop());

            if (tokens[i] === "+") {
                res = b + a;
            } else if (tokens[i] === "-") {
                res = b - a;
            } else if (tokens[i] === "*") {
                res = a * b;
            } else {
                res = Math.trunc(b / a);
            }

            stack.push(res);
        }
      

        return stack.pop();
    }
}
