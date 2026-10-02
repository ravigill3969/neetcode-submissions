class TrieNode {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;

        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }

            cur = cur.children.get(c);
        }

        cur.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(index, root) {
            let cur = root;

            for (let i = index; i < word.length; i++) {
                let ch = word[i];

                if (ch === ".") {
                    for (let val of cur.children.values()) {
                        if (dfs(i + 1, val))return true;
                    }

                    return false;
                } else {
                    if (!cur.children.has(ch)) {
                        return false;
                    } else {
                        cur = cur.children.get(ch);
                    }
                }
            }

            return cur.end;
        }

        return dfs(0, this.root);
    }
}
