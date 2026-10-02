class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Solution {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        for (let w of words) {
            this.addWords(w);
        }
        let ROW = board.length;
        let COL = board[0].length;

        let res = new Set();
        function dfs(i, j, root, word) {
            if (i < 0 || i >= ROW || j < 0 || j >= COL || board[i][j] === "#") {
                return;
            }

            let temp = board[i][j];
            if (!root.children.has(temp)) return;

            let nextNode = root.children.get(temp);
            word = word + temp;

            if (nextNode.isEnd) {
                res.add(word);
            }

            board[i][j] = "#";

            dfs(i + 1, j, nextNode, word);
            dfs(i - 1, j, nextNode, word);
            dfs(i, j + 1, nextNode, word);
            dfs(i, j - 1, nextNode, word);

            board[i][j] = temp;
        }

        for (let i = 0; i < ROW; i++) {
            for (let j = 0; j < COL; j++) {
                dfs(i, j, this.root, "");
            }
        }

        return [...res];
    }

    addWords(word) {
        let cur = this.root;

        for (let w of word) {
            if (!cur.children.has(w)) {
                cur.children.set(w, new TrieNode());
            }

            cur = cur.children.get(w);
        }

        cur.isEnd = true;
    }
}

let board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
];

let words = ["oath", "pea", "eat", "rain"];
let solver = new Solution();
console.log(solver.findWords(board, words));
// ["oath","eat"]
